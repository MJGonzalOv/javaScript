//normal

function sumar(a,b){
    return a+b;
}
function restar(a,b){
    return a-b;
}
function dividir(a,b){
    if(b==0){
        return('sintaxis error')
    }
    else{
        return a/b
    }
}
console.log(sumar(2,3));
console.log(dividir(6,0))

//Funcion flecha
const sumar_f = (a,b) => {
    return a+b;
}
console.log(sumar_f(1,2));

//simplificado
const sumar_fs = (a,b)=>a+b;
console.log(sumar_fs(2,2));

//callback
const usuaarios =[
    {
        d:1,
        nombre:'jorge'
    },
    {
        id:2,
        nombre:'manuel'
    },
    {
        id:3,
        nombre:'jose'
    },{
        id:4,
        nombre:'kol'
    },
];

const calificaciones = [
    {id:1,
        calificacion:6
    },
    {
        id:2,
        calificacion: 9
    },
    {
        id:3,
        calificacion:10
    },{
        id:4
    }
];

const getNameUserById = (id,callback) =>{
    const resultado = usuaarios.find(res => res.id==id)?.nombre;
    if (resultado){
        callback(null,resultado);
    }else{
        callback('el usuario'+id+'no existe',null);
    }
   // console.log(resultado);
}
const id = 4;
getValifById(id,(error,result)=>{
    if(error){
        console.log(error);
    }else{
        console.log(`el estudiante ${result} si existe`);
    }
});
const getNameUserById = (id,callback) =>{
    const resultado = calificaciones.find(res => res.id==id)?.nombre;
    if (resultado){
        callback(null,resultado);
    }else{
        callback('el usuario'+id+'no tiene calificacion',null);
    }
   // console.log(resultado);
}