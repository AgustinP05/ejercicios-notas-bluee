class Header extends React.Component{
    constructor(props){
        super(props);//Queremos usar las funciones del constructor(props) de Component. Para eso tenemos que pasar nuestra prop por super()
        this.propiedad1 = 10;
    }

    render(){
        return <header>
            <h2>{this.props.tituloCabecera}</h2>
            <span>El valor de la propiedad es de: {this.propiedad1}</span>
        </header>;

    }
}

Footer = (props) => <footer><img src={props.imagenFooter} style={{width:200, borderRadius:30}}/></footer>;
//Vemos que el style viene con dos llaves y dentro va un dato y su valor. El valor solo trabaja SOLO en pixeles, no en porcentajes ni nada
//Primera llave significa que vamos a usar dentro un valor html
//El segundo significa que vamos a usar un objeto

function Article(props) {
    return <div>
        <h1>{props.titulo}</h1>
        <p></p>
        <span></span>
    </div>
}

function Main(props) {
    return <main>
        <h1>{props.tituloMain}</h1>
        <section>
            <Article titulo={props.tituloArticle} ></Article>
            <Article titulo={props.tituloArticle2}></Article>
        </section>
    </main>
}

function App() {
    return <div>
        <Header tituloCabecera={'Titulo de Cabecera'}></Header>
        <Main tituloMain={'Titulo del Main'} tituloArticle={'Titulo de este Articulo'} tituloArticle2={'Titulo de este Articulo 2'}></Main>
        <Footer imagenFooter={'img/kratitos.jpg'}></Footer>    
    </div>
}

/*
const root = ReactDOM.createRoot(window.document.getElementById('root'));
root.render(<App/>);
*/
