const FormComponent = ({
  dataForm,
  saveDataInput,
  sendData,
  handleFileInput,
  product
  
  
}) => {
  console.log(product)
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
          
          placeholder={product?.nameProduct || "Introduzca el nombre del producto"}
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
            placeholder={product?.description || "Introduzca la descripción"}
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
          placeholder={product?.cost || "Introduzca el costo"}
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
          placeholder={product?.category || "Introduzca la categoria"}
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
          placeholder={product?.stock || "stock"}
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
      </form>
    </div>
  );
};

export default FormComponent;
