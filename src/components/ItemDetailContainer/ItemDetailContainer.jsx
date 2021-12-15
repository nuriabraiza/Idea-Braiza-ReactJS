import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import logoxl from "../../images/logoxl.png";
import "./detailC.css";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const itemBase = doc(db, "items", itemId);
    console.log(itemBase);
    getDoc(itemBase).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.data);
        setItem(snapshot.data(), itemId);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, [itemId]);

  return (
    <div className="container-detail">
      <img src={logoxl} alt="logo" />
      <section className="detail">
        {item && <ItemDetail item={item} key={itemId} />}
        {loading && <h4>Loading...</h4>}
      </section>
    </div>
  );
}

export default ItemDetailContainer;
