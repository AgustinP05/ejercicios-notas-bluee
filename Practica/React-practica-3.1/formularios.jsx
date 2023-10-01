//Para obtener la informacion de esas etiquetas, vamos a usar el e oevent

function handleNombre(e){
    let etiqueta= e.target;
    console.log(etiqueta.value);
}

function handleEdad(e){
    console.log(e.target);
}

function handleCodigo(e){
    console.log(e.target);
}

function handleBotonForm(e){
    console.log(e.target);
}

function handleSubmitForm(e){
    e.preventDefault();//Evita que se recargue la pagina
    console.log(e.target);
    let campo =e.target.querySelectorAll('input')
    console.log(campo);
    campo.forEach(element => {
        console.log(element.value);
    });
}

function Formulario(){ //onSubmit es para cuando se hace submir en el boton del form
    return <form onSubmit={handleSubmitForm}>
        <label>Nombre</label>
        <input type="text" required onKeyDown={handleNombre}></input>
        <br />
        <label>Edad</label>
        <input type="Number" required onKeyDown={handleEdad}></input>
        <br />
        <label>Codigo</label>
        <input type="text" required onKeyDown={handleCodigo}></input>
        <br />
        <input type="button" value="Enviar formulario por boton" onClick={handleBotonForm}/>

        <input type="submit" value="Enviar formulario por form" />
    </form>
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Formulario/>);