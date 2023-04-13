import { useState } from "react";
import ListItem from "./ListItem";

const List = () => {
  const LIST_THREE = 3;
  const LIST_MAX = 9;
  const [itemsToShow, setItemsToShow] = useState(LIST_THREE);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Jeans"
    },
    {
      id: 2,
      name: "Jeans Skinny"
    },
    {
      id: 3,
      name: "Jeans Flex"
    },
    {
      id: 4,
      name: "Jeans Strech"
    },
    {
      id: 5,
      name: "Shirt"
    },
    {
      id: 6,
      name: "T-Shirt"
    },
    {
      id: 7,
      name: "Perfume"
    },
    {
      id: 9,
      name: "Hat 1"
    },
    {
      id: 10,
      name: "Hat 2"
    },
    {
      id: 11,
      name: "Hat 3"
    },
    {
      id: 12,
      name: "Hat 3"
    },
    {
      id: 13,
      name: "Hat 3"
    },
    {
      id: 14,
      name: "Hat 3"
    }
  ]);

  const isShowLess = () =>
    itemsToShow === LIST_MAX || itemsToShow === products.length;

  const showMoreOrLess = () =>
    setItemsToShow((prev) => {
      return isShowLess() ? LIST_THREE : prev + LIST_THREE;
    });

  const viewAll = () => {
    setItemsToShow(products.length);
  };

  const deleteItem = (index) => {
    const productsCp = [...products];
    productsCp.splice(index, 1);
    setProducts(productsCp);
    // setProducts(products.filter((item, idx) => idx !== index));
  };

  return (
    <div>
      <ul className="product-list">
        {products &&
          products.slice(0, itemsToShow).map((item, idx) => {
            return (
              <ListItem
                key={item.id}
                item={item}
                deleteItem={deleteItem}
                index={idx}
              ></ListItem>
            );
          })}
      </ul>
      <button onClick={showMoreOrLess}>
        {isShowLess() ? "Show Less..." : "Show More..."}
      </button>
      {itemsToShow !== products.length && (
        <button onClick={viewAll}>View All</button>
      )}
    </div>
  );
};

export default List;
