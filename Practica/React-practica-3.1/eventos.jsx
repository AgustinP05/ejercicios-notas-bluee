

//Colocando evento a mi etiqueta
function handleFuncion1(){
    console.log("Evento de componente 1");
}

function Componente1(){//Cuando queramos agregar un evento dentro de las etiquetas html en react, recordar que las cosas que tengan mas de dos palabras se tiene que usar el camelCase, como por ejemplo el 'onclick' pasa al 'onClick'
                    // Recordar que en lugar de las comillas como se hace en html, tenemos que poner la funcion jd dentro de llaves y ademas sin parentesis para hacer referencia a ella. Ya que si estuviese con los parentesis, es como si la estuviesemos llamando/ejecutando y no queremos eso
    return <div onClick={handleFuncion1}>
        <img src={"img/kratitos.jpg"}></img>
        <h3>Titulo Principal</h3>
        <p>Parrafo del contenido principal</p>
    </div>
}





//Manera de invocar/llamar una funcion dentro de otra:
//1-Callback. Es decir pasando por parametro la funcion y utilizarla
    function f1(){
        //Codigo
    }

    function f2(f1){
        f1();
    }
    f2(f1);
// Conclusion: Al no poder poner parentesis al hacer referencia a la funcion, NO podemos hacer callback en ella
// function Componente2(){
//     return <div onClick={handleFuncion2(f1())}> //ERRRRRROOOOOOOOOR
//     </div>
// } 


//2-Llamada directa Cuando llame a f3, va a llamar directamente a f1
    function f3(){
        f1();
    }
    f3();//Aqui se llama f3 y ademas se llama y ejecuta f1
//Conclusion:Si encerramos la funcion que queremos ejecutar dentro de una funcion anonima, si vamos a poder asignar parametros tranquilamente
// function Componente2(){
//         return <div onClick={()=>{handleFuncion2(param1,param2)}}>//Puede Funcionar
//     </div>
// } 

//3-Retornando el valor de la funcion. Cuando llame a f4, no va llamar f1, es decir no se ejecuta, solo retonará de f4 el resultado de lo de f1. Por lo tanto: 
    function f4(){
        return f1();
    }
    let variable = f4(); //  let variable = f1();   //En la variable, aunque se este llamando a f4(), esta devolviendo el resultado de f1   

//Conclusion: Una funcion anonima o no que retorne una funcion, funciona tambien. Recordar que la diferencia es que el return toma el valor de la funcion. Por lo tanto el onClick ejecuta directamente lo que hace handleFuncion2
//Recordar que si el return esta en una sola linea, se puede sacar el return y las llaves
// function Componente2(){
//         return <div onClick={()=>{return handleFuncion2(param1,param2)}}>//Puede Funcionar y tambien:  return <div onClick={()=> handleFuncion2(param1,param2)}>
//     </div>
// } 
/////////////////////////////////////////////////////////////////



//Colocando evento con parametro a mi etiqueta
function handleFuncion2(param1,param2){
    console.log("Componente 2. Los numeros son "+param1+" y "+param2)
}

function Componente2(){
                    //  Como la funcion de aca no se le puede poner parentesis porque sino se ejecuta, tampoco podemos poner parametros en ella. Asi que vamos a usar el metodo 2 o 3. Aqui voy a usar 3
    return <div onClick={()=> handleFuncion2(10,25)}>
        <img src={"img/kratitos.jpg"}></img>
        <h3>Titulo Principal</h3>
        <p>Parrafo del contenido principal</p>
    </div>
}



//Colocando evento con parametro y simulando que pasamos props a mi etiqueta
function handleFuncion3(param1,param2){
    console.log("Componente 3. Los numeros son "+param1+" y "+param2)
}

function Componente3(props){
    return <div onClick={()=> handleFuncion3(props.datoAfuera1,props.datoAfuera2)}>
        <img src={"img/kratitos.jpg"}></img>
        <h3>Titulo Principal</h3>
        <p>Parrafo del contenido principal</p>
    </div>
}



//Colocando evento y usando el parametro 'e' o 'event' para tener mas informacion del evento y de la etiqueta
//Es un parametro especial dado por js que nos da toda la informacion de una etiqueta
//El target hace referencia a la etiqueta que apuntamos. En este caso seria la img
function handleFuncion4(e){
    console.log("Componente 4");
    console.log(e);
}

function Componente4(){
    //                  Como no tiene parametros no hay necesidad de usar la funcion anonima para llamar al handleFuncion
    return <div onClick={handleFuncion4}>
        <img src={"img/kratitos.jpg"} style={{width:200}}></img>
        <h3>Titulo Principal</h3>
        <p>Parrafo del contenido principal</p>
    </div>
}

function App(){
    return <div>
        <Componente1></Componente1>
        <Componente2></Componente2>
        <Componente3 datoAfuera1={123} datoAfuera2={456}></Componente3>
        <Componente4></Componente4>
    </div>
}


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App/>);