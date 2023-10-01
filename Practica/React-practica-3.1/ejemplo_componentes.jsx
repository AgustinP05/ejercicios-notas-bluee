function Header(){
    return <header></header>;
}

function Footer(){
    return <footer></footer>;
}

function Main(){
    return <main>
        <Section></Section>
        <Section></Section>
        <Section></Section>
    </main>;
}

function Section(){
    return <section>
        <Article></Article>
        <Article></Article>
        <Article></Article>
    </section>
}

function Article(){
    return <article>
        <img></img>
        <h1>Titulo</h1>
        <p></p>
    </article>
}
//Si ponemos por ejemplo Titulo en el h1, vemos que tambien se aplica en todos los Articles que se generan en las Section


function App(){
    return <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div> 
}

//ReactDOM.render(<App></App> , window.document.getElementById('root')); //Se usa en version 17 para abajo
//Si nosotros ejecutamos el codigo con el ReactDOM.render() que viene por react-dom.development, la consola del navegador nos dará una advertencia que nos recomienda utilizar createRoot en lugar de la anterior. Esto por si deja de funcionar en futuras actualizaciones.
//ReactDOM es un objeto que tiene la funcion render() que permite renderizar en la pantalla.
//Luego crearon una nueva funcion createRoom() que sirve para crear el root para poder utilizarla con el metodo render(). Así solo tenemos que especificar el componente que queremos renderizar y ahorrarnos escribir cada vez que queremos hacerlo en el root.
//Esta forma se utiliza de a versio 18 para arriba
//const root = ReactDOM.createRoot(window.document.getElementById("root"));
//root.render(<App/>);//Si solo se invoca al componente sin parametros, puede usarse solo la etiqueta de cierre