import uuid from "react-uuid";
import parseNestedObj from "../utils/Helper/parseNestedObj";
import visNetworkDummyData from "../data/visNetworkDummyData";

const Table = (props) => {
  let data = props.data; // data is a object
  let chosenTopic = props.chosenTopic;
  let chosenProperty = props.chosenProperty;
  let bindings = data?.results?.bindings;

  if (data === null || data === undefined) {
    data = visNetworkDummyData;
  }

  const parseBinding = (binding) => {
    return (
      <tr key={uuid()}>
        <td key={uuid()}>{binding.itemLabel.value}</td>
        <td key={uuid()}>{binding.child1Label.value}</td>
        <td key={uuid()}>{binding.child2Label.value}</td>
      </tr>
    )
  };


  let table = null;
  if (data !== null && data !== undefined && Object.keys(data).length > 0) {
    table = (
      <table>
        <thead>
          <tr>
            <th>Parent Node</th>
            <th>Child Node</th>
            <th>Grandchild Node</th>
          </tr>
        </thead>
        <tbody>
          {bindings.map(binding => parseBinding(binding))}
        </tbody>
      </table>
    );
  }

  return <div className="Table">{table}</div>;
};

export default Table;
