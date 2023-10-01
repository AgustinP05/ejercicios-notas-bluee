//States con componentes del tipo function
function Inicio(){
    //  [getVar_mutable, SetmodificarVar()] 
    let [titulo, setTitulo] = React.useState({propiedad2:"Feliz Navidad"}); //le indicamos a react que este dato es mutable. Con el valor inicial "Feliz Navidad"

    //Por lo general lo vamos a hacer así
    //En las state de clase traducido a esto sería
    let [state, setState]=React.useState({propiedad2:"Feliz navidad"});//Dentro de useState va a estar la lista con todas las propiedades mutables.


    let precio = 2000;//Variable no mutable

    //Simulacion de evento para cambio de estado
    // setTimeout(()=>{
    //     console.log("Han pasado 5 segundos");
    //     setTitulo({propiedad2:"Ya no es navidad :("});
    // },5000); //Despues de 5 segundos se ejecuta el setTitulo, en la cual modifica el titulo


    return <div>
        <h3>{titulo.propiedad2}</h3>
        <span>{precio}</span>
    </div>
}

// const root = ReactDOM.createRoot(window.document.getElementById('root'));
// root.render(<Inicio/>);