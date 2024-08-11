for (let valor = true; valor; ) {
    console.log(`menu: 1.consultar 2.actualizar 3.salir`);
    let opcion = Number(prompt(`ingrese la opcion`));
    valor = opcion == 3 ? false : true;
}