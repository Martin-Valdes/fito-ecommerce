import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../appFirebase/appFirebase";

import "./CheckOut.scss";

const CheckOut = () => {
  const { cart, allCost, deleteCart } = useContext(CartContext);
  const [idOrder, setIdOrder] = useState("");
  const [status, setStatus] = useState(true);

  const [dataForm, setDataForm] = useState({
    name: "",
    tel: "",
    email: "",
    messaje: "",
    cart,
    cost: allCost(),
  });

  const saveDataInput = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const sendData = (e) => {
    e.preventDefault();

    const dataSend = { ...dataForm };
    const orderRef = collection(db, "ordenes");
    addDoc(orderRef, dataSend).then((res) => setIdOrder(res.id));
  };

  useEffect(() => {
    if (!idOrder) return setStatus(true);
    deleteCart()
    return setStatus(false);

  }, [idOrder]);

  return (
    <div className="checkOutContainer">
      <h1>Complete sus datos</h1>
      {status ? (
        <div className="checkOutForm">
          <form onSubmit={sendData}>
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              value={dataForm.name}
              onChange={saveDataInput}
              required
            />
            <div class="mb-3">
              <label htmlFor="tel" class="form-label">
                Telefono
              </label>
              <input
                class="form-control"
                type="text"
                id="tel"
                rows="3"
                name="tel"
                value={dataForm.tel}
                onChange={saveDataInput}
                required
              ></input>
            </div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              value={dataForm.email}
              onChange={saveDataInput}
              required
            />
            <label htmlFor="message" className="form-label">
              Mensaje
            </label>
            <textarea
              className="form-control"
              type="text"
              id="messaje"
              name="messaje"
              value={dataForm.messaje}
              onChange={saveDataInput}
            />

            <button type="submit" className="btn btn-success">
              Enviar
            </button>
          </form>
        </div>
      ) : (
        <>
          <div className="ordenContainer">
            <div>Numero de órden: {idOrder}</div>
            <div>Nombre: {dataForm.name}</div>
            <div>Email: {dataForm.email}</div>
            <div>Teléfono: {dataForm.tel}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckOut;
