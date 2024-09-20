import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc} from "firebase/firestore"
import { db } from "../../appFirebase/appFirebase";

import "./ProductDetail.scss";

export const ProductDetail = () => {

  const [prod, setProd] = useState({})
  const { id } = useParams();

  useEffect(()=>{
            
    const productsRef = doc(db, "products", id)
    getDoc(productsRef)
    .then((res)=>{
        const productDb ={id: res.id, ...res.data()}
        if (!res.exists()){
            setProductExist(true)
        }
        setProd(productDb)
    })
},[id])
 
  return (
    <div className="ContainerDetail">
      <img src={prod.img1}/>
      <section className="carousellContainer">

      </section>
      <section className="containerDescription">
        
      </section>
    </div>
  );
};
