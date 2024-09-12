
const FormComponent = ({ dataForm, saveDataInput, sendData, handleFileInput }) => {
  return (
    <div>
      <form onSubmit={sendData}>
        <label htmlFor="nameProduct">Producto</label>
        <input
          type="text"
          id="nameProduct"
          name="nameProduct"
          value={dataForm.nameProduct}
          onChange={saveDataInput}
        />
        <label htmlFor="description">Descripcion</label>
        <input
          type="text"
          id="description"
          name="description"
          value={dataForm.description}
          onChange={saveDataInput}
        />
        <label htmlFor="cost">Costo</label>
        <input
          type="text"
          id="cost"
          name="cost"
          value={dataForm.cost}
          onChange={saveDataInput}
        />
        <label htmlFor="stock">Stock</label>
        <input
          type="text"
          id="stock"
          name="stock"
          value={dataForm.stock}
          onChange={saveDataInput}
        />
        <input
          type="file"
          id="img"
          name="img"
          accept="image/*"
          onChange={handleFileInput}
          multiple
        />
        <button type="submit">Send order</button>
      </form>

    </div>
  );
};

export default FormComponent;
