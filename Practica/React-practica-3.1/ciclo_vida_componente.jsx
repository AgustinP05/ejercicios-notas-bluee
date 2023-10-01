class Montaje extends React.Component{
    render(){
        return <p>Componente creado</p>
    }

    //Metodo de Component que se ejecuta automaticamente cuando se renderiza el componente
    componentDidMount(){//Podemos sobreescribirlo
        console.log("Me ejecuté luego de crear el componente");
    };

};

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Montaje/>);




class Actualizacion extends React.Component{
    constructor(){
        super();
        this.state={propiedad1:"Componente"};

        //setTimeout(()=>{console.log("Han pasado 5 segundos");this.setState({propiedad1:"Componente actualizado"});},5000);
    }

    render(){
        return <p>{this.state.propiedad1}</p>
    }

    //Metodo de Component que se ejecuta automaticamente cuando se renderiza el componente
    componentDidUpdate(){//Podemos sobreescribirlo
        console.log("Me ejecuté luego de actualizar el componente");
    };

};

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Actualizacion/>);




class Desmontaje1 extends React.Component{//Esta componente la vamos a eliminar al reemplzarla por otra
    constructor(){
        super();
        this.state={propiedad1:"Componente"};

        setTimeout(()=>{console.log("Han pasado 5 segundos");this.setState({propiedad1:"Componente actualizado"});},5000);
    }

    render(){
        return <p>{this.state.propiedad1}</p>
    }

    //Metodo de Component que se ejecuta automaticamente cuando se renderiza el componente
    componentDidUpdate(){//Podemos sobreescribirlo
        console.log("Me ejecuté luego de actualizar el componente");
    };

    //Metodo de Component que se ejecuta automaticamente cuando se renderiza el componente
    componentWillUnmount(){//Podemos sobreescribirlo
        console.log("Me ejecuté luego de eliminar el componente");
    };

};

function Desmontaje2(){
    return <p>Componente Nuevo</p>;
}


//Contendrá a las dos Desmontaje, eliminará la 1 por la 2
class ControlDesmontaje extends React.Component{
    constructor(){
        super();
        this.state={visibilidad:true};

        setTimeout(()=>{this.setState({visibilidad:false});},8000);
    }

    render(){
        if(this.state.visibilidad==true){return <Desmontaje1></Desmontaje1>}
        else{return <Desmontaje2></Desmontaje2>};
    }
};


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<ControlDesmontaje/>);