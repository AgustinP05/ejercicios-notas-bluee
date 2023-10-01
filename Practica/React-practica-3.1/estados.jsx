//States con componentes del tipo clase
class Header extends React.Component{
constructor(){//Para evitar confusion vamos a no usar props en este ejemplo
    super();
    this.propiedad1= 2000; //Simulamos que esta es una propiedad inmutable que vendría en una props
        //Lista de propiedades mutables:
    this.state={propiedad2:'Feliz Navidad'}; //Valor por defecto propiedad2

    // //Simulacion de evento para cambio de estado
    // setTimeout(()=>{//Utilizar arrow function ya que no aisla a este bloque completamente del resto del codigo. Si utilizace una anonymous function o funcion normal, ahí sí se aislaría del resto del codigo y tendriamos que usar parametros, entre otras modificaciones.
    //     console.log("Han pasado 5 segundos");
    //     this.setState({propiedad2:"Ya no es navidad :("});
    // },5000); //Despues de 5 segundos se ejecuta el setState, en la cual modifica la propiedad2

}
//@Override
render(){
    return <header>
        <span>Valor del objeto:{this.propiedad1}</span>
        <h2>{this.state.propiedad2}</h2>
    </header>
} 
}

// const root = ReactDOM.createRoot(window.document.getElementById('root'));
// root.render(<Header/>);
