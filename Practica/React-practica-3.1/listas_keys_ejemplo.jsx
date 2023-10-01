//Para esto podriamos usar boostrap o tailwind. Boostrap es mas rapido de aprender que tailwind. Tailwind es mas especifico




function Main(props) { //Main recibe la lista a traves de props={dato:{idProducto:150,imgProducto:'img/kratitos.jpg', tituloProducto:'Remera Kratos',descProducto:'Talle M,L,XL'}}
    return <main className="d-flex justify-content-evenly">
        {
            props.lista_datos.map((elemento,indice,lista)=>{//elemento sería cada elemento de lista_objetos, es decir lista_objetos[0] o lista_objetos[1] o lista_objetos[2] 
                return <Card key={elemento.idProducto} dato={elemento}></Card>;
            })
            
            // props.lista_datos.filter((elem,ind,listcompleta)=>{
            //     if(elem.tituloProducto=='Remera Kratos'){
            //         return <Card key={elem.idProducto} dato={elem}></Card>
            //     }
            // })
        }
    </main>
    
}


function Card(props){//props={dato:{{imgProducto=?, tituloProducto=?, descProducto=?}}
return<div className="card" style={{width:350}}>
        <img src={props.dato.imgProducto} className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">{props.dato.tituloProducto}</h5>
            <p className="card-text">{props.dato.descProducto}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
}

function Header() {
    return <header>

    </header>
}

function Footer() {
    return <footer></footer>
}
function App() {
    return <div>
        <Header></Header>
        <Main lista_datos={lista_objetos}></Main> 
        <Footer></Footer>
    </div>
}
//Con lista_datos hacemos que la lista_objetos sea una propiedad de Main

//Lista de objetos que vamos a usar para el ejemplo
let lista_objetos =[{idProducto:150,imgProducto:'img/kratitos.jpg', tituloProducto:'Remera Kratos',descProducto:'Talle M,L,XL'},
{idProducto:151,imgProducto:'img/kratitos.jpg', tituloProducto:'Gorra Ohmega',descProducto:'Negra, Blanca, Azul'},
{idProducto:152,imgProducto:'img/kratitos.jpg', tituloProducto:'Llavero',descProducto:'Hacha, Espadas, Ohmega'}];
///////////////////////////////////////////////////


// const root = ReactDOM.createRoot(window.document.getElementById('root'));
// root.render(<App/>);
