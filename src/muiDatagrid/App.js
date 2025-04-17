import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

function App() {
  let [item, setItem] = useState("");
  let [rows, setRows] = useState([]);
  let [columns, setColumns] = useState([]);

  let baseUrl = "https://jsonplaceholder.typicode.com/users";
  // let detailView = `https://jsonplaceholder.typicode.com/users/${item}`;
  let dataGridDefaultColumns = [
    "id",
    "name",
    "username",
    "phone",
    "website",
    "fullName",
  ];
  let Actions = ["button"];
  async function fetchData() {
    try {
      let response = await fetch(baseUrl);
      let jsonData = response.ok ? await response.json() : [];
      return jsonData;
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    async function getData() {
      const fetchedData = await fetchData();

      if (fetchedData && fetchedData.length > 0) {
        // Add a fullName field by combining name and username
        const rowsWithFullName = fetchedData.map((row) => ({
          ...row,
          fullName: `${row.username} ${row.name}`, // Combine username and name to create fullName
        }));

        setRows([...rowsWithFullName]);
        console.log("rows", rows);
        // Set columns based on data from rows
        const columns = Object.keys(rowsWithFullName[0])
          .filter((key) => dataGridDefaultColumns.includes(key))
          .map((key) => {
            console.log("key", key);
            return {
              field: key,
              headerName: key.charAt(0).toUpperCase() + key.slice(1),
              width: 270,
            };
          });
        setColumns(columns);
      }
    }

    getData();
  }, []);

  console.log("columns", columns);
  return (
    <div>
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
}

export default App;
