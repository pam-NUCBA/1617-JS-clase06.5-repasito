//sintaxis "vieja"
function nombreFunction(parametros) {
  // return qué ejecuta
}

//sintaxis flecha
const nombreFunctionFlecha = (parametros) => {
  //return qué ejecuta
};

//sintaxis flecha en una línea
const nombreFlecha = (parametros) => parametros; //qué ejecuta sin return

//orden ideal de las cosas: variables arriba, funciones después, ejecuciones al final
let arr = [10, 15, 12, 26, 14, 56];
let arr2 = [true, "cositas", 26, "perrito"];

function conForIn(param) {
  for (let a in param) {
    console.log("con for in:", param[a]);
  }
}

const conForSolo = (param) => {
  for (let a = 0; a < param.length; a++) {
    console.log("con for:", param[a]);
  }
};

conForIn(arr2);
conForSolo(arr);
