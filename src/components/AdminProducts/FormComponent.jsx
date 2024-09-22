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
        <div class="mb-3">
          <label htmlFor="description" class="form-label">
          Descripcion
          </label>
          <textarea
            class="form-control"
            id="description"
            rows="3"
            name="description"
            value={dataForm.description}
            onChange={saveDataInput}
          ></textarea>
        </div>
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
        <label htmlFor="category" className="form-label">
          Categoría
        </label>
        <input
          className="form-control"
          type="text"
          id="category"
          name="category"
          value={dataForm.category}
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
        <button type="submit" className="btn btn-success">
          Cargar
        </button>
        <button type="submit" className="deleteProduct btn btn-success">
          Eliminar
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
