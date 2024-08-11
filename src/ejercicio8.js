for(let opcion="";opcion !="salir";){

let opcion = prompt(`Ingrese una opción \n notas \n salir`);
if(opcion =="notas"){
let nota = Number(prompt(`Ingrese la nota de su asignatura`));
nota > 3? alert(`su nota de ${nota}, es aprobado`) : alert(`su nota de ${nota}, No es aprobado`);
}else if(opcion === "salir"){
break;
}else{
opcion 
alert(`opcion invalida..`);
}
}
