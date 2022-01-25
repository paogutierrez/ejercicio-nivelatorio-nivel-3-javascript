
    let numeroPiezas = Number(prompt('Escriba el numero de piezas a comprar'));
    let costo = Number(prompt('Ingresa el costo de la pieza'));

    total = numeroPiezas * costo;

    if( total >= 500000){

        inversion = total * .55
        banco = total * .30
        credito = total * .15

    }else if(total <= 500000){
        inversion = total * .70
        banco = 0
        credito = total * .30
    
    }else{
        interes = credito * .20
        }








