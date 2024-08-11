let saldoCuenta = 30000;

for (let check = false; check!=true; ) {
    alert('a continuacion, seleccione: \n 1. consultar saldo \n 2. retirar');

    let opcion = Number(prompt('Ingrese la opción(1 o 2):'));

    switch (opcion) {
        case 1:
            alert(`Su saldo es ${saldoCuenta}`);
            break;
        case 2: {
            let retiro = Number(prompt('Ingrese el valor a retirar'));
            saldoCuenta -= retiro;
            alert(`Su saldo es ${saldoCuenta}`);
            break;
        }
        case 3:
            check = true;
            break;
    }
}