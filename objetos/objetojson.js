let objetoJson ={
    key_1 : 'valor1',
    llave1 : 'valor2',
    objJson:{
        key2: 'valorn',
        key3: 'valorx'
    },
    foo:()=>console.log('Hola mundo'),
    listJson:[
        {
            name:'jorge',
            edad: 51
        },
        {
            name:'Maria',
            edad:40
        }
    ]
}
console.log('Todo el objeto');
console.log(objetoJson);

console.log('un valor');
console.log(objetoJson.key_1);

console.log('un valor');
console.log(objetoJson.objJson.key2);

console.log('valor en lista');
console.log(objetoJson.listJson[1].name);