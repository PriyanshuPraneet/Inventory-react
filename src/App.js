import Additem from "./Additem";
import Displayitems from "./Displayitems";
import Searchbar from "./Searchbar";
import { useEffect, useState } from "react";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => {
        setData({ items: data });
      });
  }, []);

  const deleteItems = (id) => {
    let items = data["items"];

    const requestOptions = {
      method: "DELETE",
    };
    fetch(`http://localhost:3000/items/${id}`, requestOptions).then(
      (response) => {
        if (response.ok) {
          items.splice(id, 1);
          setData({ items: items });
        }
      }
    );
  };

  const updateFilters = (searchParam) => {
    setFilters(searchParam);
  };

  const addItemToData = (item) => {
    let items = data["items"];

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    };

    fetch("http://localhost:3000/items", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        items.push(data);
        setData({ items: items });
      });
  };

  const filterData = (data) => {
    const filteredData = [];

    if (!filters.name) {
      return data;
    }

    for (const item of data) {
      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      }
      if (filters.maxprice !== 0 && item.price !== filters.maxprice) {
        continue;
      }
      if (filters.type !== "" && item.type !== filters.type) {
        continue;
      }
      if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }
      filteredData.push(item);
    }
    return filteredData;
  };

  return (
    <div className="container">
      <div className="row">
        <Displayitems
          deleteItems={deleteItems}
          items={filterData(data["items"])}
        />
      </div>
      <div className="row mt-3">
        <Searchbar updateSearchParams={updateFilters} />
      </div>
      <div className="row mt-3">
        <Additem addItem={addItemToData} />
      </div>
    </div>
  );
}

export default App;
