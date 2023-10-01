//Para armar listas
function ComponenteLista(props) {
    //1* MODO DE LISTAR CON map() 
    return <div>
        {
        props.lista_datos.map((elemento, indice, arrayCompleto)=>{//Dibuja Article por cada dato dentro de lista_datos
        return <Article key={elemento.idProducto} datos={elemento}></Article>; 
        })
    }
    </div>
    //
    
    /* MODO MANUAL DE LISTAR (ENGORROSO SI SE USAN MUCHOS DATOS)
    return <div>
        <Article datos={props.lista_datos[0]}></Article>
        <Article datos={props.lista_datos[1]}></Article>
        <Article datos={props.lista_datos[2]}></Article>
    </div>
    */
}

function Article(props) {
    return <article>
        <img src={props.datos.imgProducto}></img>
        <h4>{props.datos.tituloProducto}</h4>
        <p>{props.datos.descProducto}</p>
    </article>
}

//Para los componentes que se repiten mucho, podemos hacer listas. Como por ejemplo para Article
let lista_objetos =[{idProducto:150,imgProducto:'img/kratitos.jpg', tituloProducto:'Remera Nike',descProducto:'Talle M,L,XL'},
{idProducto:151,imgProducto:'img/kratitos.jpg', tituloProducto:'Remera Nike',descProducto:'Talle M,L,XL'},
{idProducto:152,imgProducto:'img/kratitos.jpg', tituloProducto:'Remera Nike',descProducto:'Talle M,L,XL'}];

//1*Pero hacerlo como esta en ComponenteLista es muy engorroso. Podriamos usar for pero en este no se puede usar return para el componente
//En cambio usaremos filter() o map(). En estas dos si se puede hacer return para el componente
//React nos recomienda que con estas dos le pongamos un atributo key al componente de la lista que queramos retornar 
//Dentro de key debemos poner los id o sino 'true' por defecto. En nuestro ejemplo lo hicimos con el nombre idPrducto

/*
const root = ReactDOM.createRoot(window.document.getElementById('root'));
root.render(<ComponenteLista lista_datos={lista_objetos}/>);
*/