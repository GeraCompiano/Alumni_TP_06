var cantidadDeGatos = prompt("Ingresá la cantidad de gatos que tenés");

console.log( '---------------- Ejercicio "A" -------------------\n\n' );

if ( cantidadDeGatos == 0 ){
    console.error('No tenés gatos!');
};

var gato1 = 1;
var gato2 = 2;
var gato3 = 3;


for( i = 1; i <= cantidadDeGatos; i++ ){

    if ( gato1 == i ){
      
        console.log('Gato #' + i + ': ' + '😺');
        gato1 += 3;

    }

    else if ( gato2 == i ){
        
        console.log( 'Gato #' + i + ': ' + '😸');
        gato2 += 3;

    }

    else if ( gato3 == i ){

        console.log( 'Gato #' + i + ': ' + '😹');
        gato3 += 3;

    }

}

