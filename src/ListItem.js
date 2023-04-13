const ListItem = ({ item, deleteItem, index }) => {
  return (
    <li className="product-item">
      <span>{item.name}</span>
      <span>
        <button onClick={() => deleteItem(index)}>x</button>
      </span>
    </li>
  );
};

export default ListItem;
