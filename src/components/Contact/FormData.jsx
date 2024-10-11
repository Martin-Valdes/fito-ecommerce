export const FormData = ({
    dataForm,
    saveDataInput,
    sendData,
}) => {
    return (
        <>
            <div className="titleContainer">
                <h1>Envianos tu consulta</h1>
            </div>
            <form onSubmit={sendData}>
                <input
                    className="formInput inp"
                    type="text"
                    id="name"
                    name="name"
                    onChange={saveDataInput}
                    value={dataForm.name}
                    placeholder="Nombre"
                    required
                />
                <input
                    className="formInput inp"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={saveDataInput}
                    value={dataForm.email}
                    required
                />
                <textarea
                    class="formInput message"
                    id="message"
                    rows="10"
                    name="message"
                    onChange={saveDataInput}
                    value={dataForm.message}
                    placeholder="En que podemos ayudarte..."
                    required
                ></textarea>
                <div className="buttonContainer">
                    <button type="submit" className="buttonSend">Enviar</button>
                </div>
            </form>
        </>

    )
}