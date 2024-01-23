import React from "react";
import styles from "../styles/Total.module.css";
import styls from "../styles/ItemCard.module.css";
import { itemContext } from "../itemContext";
import { useContext } from "react";
import { totalContext } from "../totalContext";


function Navbar() {
  const { item, setItem } = useContext(itemContext);
  const { total, setTotal } = useContext(totalContext);
  const clear = () => {
    setTotal(0);
    setItem(0);
  };
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <button className={styls.itemButton} onClick={() => clear()}>
          Reset
        </button>
    </div>
  );
}

export default Navbar;
