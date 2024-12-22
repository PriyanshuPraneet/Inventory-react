import { useState } from "react";

function Additem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const onClickAddItem = () => {
    props.addItem({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };

  return (
    <div className="container">
      <h1>Add an item</h1>
      <div className="row">
        <div className="col">
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="col">
          <label htmlFor="price">Price: </label>
          <input
            id="price"
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
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
        <div className="row mt-3 mb-3">
          <div className="col-4" />
          <button
            type="button"
            className="col-4 btn btn-primary"
            onClick={onClickAddItem}
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default Additem;
