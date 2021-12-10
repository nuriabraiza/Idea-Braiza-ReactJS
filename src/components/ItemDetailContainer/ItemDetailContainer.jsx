import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const dataBase = doc(db, "items", id);

    getDoc(dataBase).then((snapshot) => {
      if (snapshot.exists()) {
        setItem({ ...snapshot.data(), id });
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, [id]);

  console.log(id);

  return (
    <section className="ItemDetailContainer">
      {item && <ItemDetail item={item} key={id} />}
      {loading && <h4>Loading...</h4>}
    </section>
  );
}

export default ItemDetailContainer;
