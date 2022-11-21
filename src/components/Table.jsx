import { v4 as uuidv4 } from 'uuid';

const Table = (props) => {
  const data = props.items; // data is a object
  let columns = data.head.vars;
  let bindingsSet = new Set(data.results.bindings);
  let bindings = Array.from(bindingsSet);

  // create a table from the data
  const table = (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bindings.map((binding) => (
          <tr key={uuidv4()}>
            {columns.map((column) => (
              <td key={column}>{binding[column].value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return <div className="Table">{table}</div>;
};

export default Table;
