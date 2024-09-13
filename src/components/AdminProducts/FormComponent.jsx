

const FormComponent = ({
  dataForm,
  saveDataInput,
  sendData,
  handleFileInput,
}) => {
  return (
    <div>
      <form onSubmit={sendData}>
        <label htmlFor="nameProduct" className="form-label">
          Producto
        </label>
        <input
          className="form-control"
          type="text"
          id="nameProduct"
          name="nameProduct"
          value={dataForm.nameProduct}
          onChange={saveDataInput}
        />
        <label htmlFor="description" className="form-label">
          Descripcion
        </label>
        <input
          className="form-control"
          type="text"
          id="description"
          name="description"
          value={dataForm.description}
          onChange={saveDataInput}
        />
        <label htmlFor="cost" className="form-label">
          Costo
        </label>
        <input
          className="form-control"
          type="text"
          id="cost"
          name="cost"
          value={dataForm.cost}
          onChange={saveDataInput}
        />
        <label htmlFor="stock" className="form-label">
          Stock
        </label>
        <input
          className="form-control"
          type="text"
          id="stock"
          name="stock"
          value={dataForm.stock}
          onChange={saveDataInput}
        />
        <input
          className="formArchive form-control"
          type="file"
          id="img"
          name="img"
          accept="image/*"
          onChange={handleFileInput}
          multiple
        />
        <button type="submit" className="btn btn-success">Cargar</button>
      </form>
    </div>
  );
};

export default FormComponent;
