const objeto_json = {
    key1:'valor1',
    key2:2,
    key3:65,
}
const {key1,key3,msg='chango'}=objeto_json;
//
console.log(msg);

const paises = ['mexico','usa','canada'];
console.log(paises[1]);

const [mi_pais,pais_visita,pais_relax] = paises
console.log(mi_pais);

const [,,pais_seleccionado] = paises;
console.log(pais_seleccionado);

let a,b,resto;
[a,b] = [10,20];
let datos = [10,20,30,40,50];
[a,b,...resto] = datos; 
console.log(resto);