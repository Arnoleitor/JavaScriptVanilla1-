let numeroventas= parseInt(prompt("introduce numero de ventas"));
let precioventa= 0;
let total = 0;

for (let i = 0; i < numeroventas; i++) {
    const element = [i];
    precioventa= parseInt(prompt("introduce los precios"));
    total = total +  precioventa
    //total +=  precioventa
}

alert(total + " Es el precio total " )


