import React, { useState, useEffect } from "react";
import { getFirestore } from "../../firebase";
import ItemList from "../ItemList/ItemList";
import { collection, query, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const q = query(collection(db, "items"));
    getDocs(q).then((snapshot) => {
      setList(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <>
      <div className="productos">
        <ItemList list={list} />
      </div>
    </>
  );
};

export default ItemListContainer;
