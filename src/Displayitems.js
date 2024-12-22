function Displayitems({ items, deleteItems }) {
  const showItem = (item) => {
    return (
      <tr>
        <th>{item.id}</th>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.type}</td>
        <td>{item.brand}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteItems(item.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div className="container">
      <div className="row">
        <h2 align="center">Items</h2>
      </div>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Type</th>
            <th scope="col">Brand</th>
            <th scope="col">Actions</th>
          </thead>
          <tbody>{items.map(showItem)}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Displayitems;
