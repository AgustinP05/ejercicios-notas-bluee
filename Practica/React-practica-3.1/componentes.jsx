
//La diferencia con JS es que con el se podia utilizar los getElementBy, QuerySelector, createElement o las comillas invertidas para tomar o crear etiquetas HTML. React te permite utilizar realmente etiquetas HTML.
let titulo1 =<h1>Curso de React</h1>
//ReactDOM.render(titulo1, window.document.getElementById('root'));

//Recordar como haciamos en JS para meter codigo JS dentro de un HTML. Dentro de las llaves puedo colocar los datos JS que quiera
let estadoCurso ="Nuevo";
let subtitulo = <h2>Bienvenido al {estadoCurso} Curso del año {"2023"}</h2>; 
//ReactDOM.render(subtitulo, window.document.getElementById('root'));
//Si usamos una funcion dentro de la etiqueta en lugar de una variable, recordar poner los parentesis para que lo llame

//IMPORTANTE las palabras clave que puedo ingresar como propiedad en etiquetas, tienen que ser en camelCase. Por ejemplo:
let parrafo = <p className="parrafo1">El curso durará 12 meses.</p>;
//Si yo quisiera poner class como en HTML en lugar de className, no funcionará. Tenemos que usar los nombres de las propiedades en camelCase

//Para crear una etiqueta:
//                  etiqueta html, atributos, texto/valor dentro de la etiqueta
let nueParrafo = React.createElement('p',{className:"parrafito", id:"parrr"}, "El nuevo curso estará disponible en febrero.");
//Lo podemos guardar en una variable para utilizarla luego
//ReactDOM.render(nueParrafo, window.document.getElementById('root'));

//let contenedor = window.document.getElementById('root');
//Gracias la libreria react-dom.development.js nos provee un objeto
//El metodo render() dibuja todo lo que hemos puesto en el lenguaje jsx a HTML. Basicamente hace lo mismo que cuando usabamos la propiedad innerHTML JS que sirve para mostrar texto como HTML. 
//Este metodo tiene 2 parametros. El primero es lo que queremos mostrar en HTML y el segundo es la ubicacion donde mostrarlo
//ReactDOM.render(titulo1, contenedor);



/************************************************************ */
//Creacion de componente simple
//Aclaracion: Se exige que los componentes empiecen con mayuscula y que sean camelcase
function Comp1(){
    let titul= <h1>Buenas noches</h1>;
    return titul;
}
let componente1 = Comp1(); //Guardamos lo retornado de la funcion en esta variable

//Componente compuesto
function Comp2(){
    return <div>
        <section>
            <article>
                <img></img>
                <h1></h1>
                <p></p>
            </article>
            <article>
                <img></img>
                <h1></h1>
                <p></p>
            </article>
            <article>
                <img></img>
                <h1></h1>
                <p></p>
            </article>
        </section>
    </div>
}
//Vemos que la etiqueta img tienen ahora una etiqueta de cierre, cosa que no pasa en el archivo html
let componente2 = Comp2(); //Guardamos lo retornado de la funcion en esta variable

let Comp3= ()=>//Podriamos tambien hacer con arrow function y quitar el return para agilizar el tipeo
    <div>
        <section>
            <p>Texto componente 3</p>
        </section>
    </div>;
//Podriamos llamar el retorno del componente como hicimos antes: comp3() y guardarlo en una variable
//Pero los de React crearon otra forma para invocar una funcion que retorne html:
let componente3= <Comp3></Comp3>//Simplemente ponemos el nombre de la funcion como una etiqueta html

//ReactDOM.render(componente3, window.document.getElementById('root'));


//Otra forma de crear componentes es a traves de clases
//Hacemos que la clase creada extienda de React.Component para que pueda acceder los metodos de el.
//El objeto React viene de react.development.js. Dentro de ese objeto,tiene una clase Component
//Aprovechamos la extension para que MiClase1 sobreescriba el metodo render()
//Estamos obligados a sobreescribir el metodo render ya que Component() es una interface. Entonces tenemos que implementar su metodo
//Gracias a render() vamos a retornar html en las futuras instancias de esta clase
class MiClase1 extends React.Component{
    render(){ return <div>
            <section>
                <article>
                    <img></img>
                    <h1>TITULO 1</h1>
                    <p>Parrafito 1</p>
                </article>
                <article>
                    <img></img>
                    <h1>TITULO 2</h1>
                    <p>Parrafito 2</p>
                </article>
                <article>
                    <img></img>
                    <h1>TITULO 3</h1>
                    <p>Parrafito 3</p>
                </article>
            </section>
        </div>;
    }
}

//let claseComponente1 = new MiClase1();//Instanciamos el objeto de la clase MiClase1
//let componente4 = claseComponente1.render(); //Guardamos el retorno del metodo dentro de una variable para usarla luego

//Podriamos hacer lo mismo pero resumido con:
let componente4 = <MiClase1></MiClase1>//Lo mismo que las dos lineas de arriba

//ReactDOM.render(componente4, window.document.getElementById('root'));


//Entonces tenemos dos formas de crear clases, con funcion y/o con metodos.
//Y estos componentes creados se pueden invocar con una etiqueta <...></...> y adentro contiene el html que se quiere retornar 
//Esta forma de invocarlos es muy comoda para cuando se quiere invocar estos componentes dentro de otros
//Vea el archivo ejemplo_componentes