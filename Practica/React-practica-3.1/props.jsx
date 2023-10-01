//React solo puede tener un parametro y puede tener cualquier nombre obviamente. Por practica se lo conoce como props. Ya que son uno o muchos datos enviados a esa componente. Este parametro props va a crear un objeto y dentro va a meter las distintas propiedades
function MiPrimerPromp(props){  // props = {parrafo={"Esto es un jemplo de parrafo"}}
    let texto = "Este es mi primer Promp";
    let etiquetaSpan = null;
    if(props.visualizarSpan){
        etiquetaSpan = <span>Soy una etiqueta span</span>
    }
    return <div>
            <h1>{props.titulo}</h1>
            <p>{texto}</p>
            <p>{props.parrafo}</p>
            {etiquetaSpan}
        </div>;
}

/*
const root = ReactDOM.createRoot(window.document.getElementById("root"));
root.render(<MiPrimerPromp parrafo={'Esto es un jemplo de parrafo'} titulo={'Titulo de la web'} visualizarSpan={true}/>);
// parrafo seria el atributo y el valor tiene que estar entre llaves como un objeto
*/