import { useState } from "react";

function Searchbar(props) {
  const [name, setName] = useState("");
  const [maxprice, setMaxPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const onClickButton = () => {
    props.updateSearchParams({
      name: name,
      maxprice: maxprice,
      type: type,
      brand: brand,
    });
  };

  return (
    <div className="container">
      <h1>Search for item</h1>
      <div className="row">
        <div className="col">
          <label htmlFor="textname">Name: </label>
          <input
            id="textname"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="col">
          <label htmlFor="price">Max Price: </label>
          <input
            id="price"
            type="number"
            className="form-control"
            value={maxprice}
            onChange={(e) => {
              setMaxPrice(e.target.value);
            }}
          />
        </div>
        <div className="col">
          <label htmlFor="type">Type: </label>
          <input
            id="type"
            type="text"
            className="form-control"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
        </div>
        <div className="col">
          <label htmlFor="brand">Brand: </label>
          <input
            id="brand"
            type="text"
            className="form-control"
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
            }}
          />
        </div>
        <div className="row mt-3">
          <div className="col-4" />
          <button
            type="button"
            className="col-4 btn btn-primary"
            onClick={onClickButton}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
