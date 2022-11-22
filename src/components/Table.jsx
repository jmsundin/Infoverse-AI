import { v4 as uuidv4 } from 'uuid';

const Table = (props) => {
  const data = props.items; // data is a object
  const columns = data != null ? data.head.vars : [];
  const rows = data != null ? data.results.bindings : [];
  
  // console.log("columns: ", columns);
  // console.log("rows: ", rows);

  // create a table from the data
  const table = (
    <table>
      <thead>
        <tr>
          {columns && columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows && rows.map((item) => (
          <tr key={uuidv4()}>
            {columns && columns.map((column) => (
              <td key={column}>{item[column].value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return <div className="Table">{table}</div>;
};

export default Table;
