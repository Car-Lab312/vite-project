import _ from 'underscore';

/**
 * 
 * @param {Array<string>} tiposDeCarta Ejemplos: ['C','D','H','S'];
 * @param {Array<string>} tiposEspeciales Ejemplos: ['A','J','Q','K'];
 * @returns {Array}
 */

// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta) throw new Error('TiposDeCarta es obligatorio');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}