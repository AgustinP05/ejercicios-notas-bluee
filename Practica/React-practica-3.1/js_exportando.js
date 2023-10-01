//Practicando Exportar e Importar datos de un archivo js a otro
export let variableExportada1= 'Hola me han importado';
export let variableExportada2={//Recordar que esto es un objeto
    dato1:15,
    dato2:"Dato 2",
    dato3:true
};


//export default. Me puedo ahorrar el tipo y nombre de la variable. Solo puede haber uno por archivo
//export default 'Soy un export default';

export default {
    dato1:37,
    dato2:"Dato 2 por Default",
    dato3:false,
    dato4:()=>{alert("Export default con exito");}
};

