
// interface AudioPlayer {
//     audioVolumen: number;
//     songDuration: number;
//     song: string;
//     details: Details;
// }

// interface Details{
//     author: string;
//     year: number;
// }

// const audioPlayer: AudioPlayer = {
//     audioVolumen: 90,
//     songDuration: 36,
//     song: "mess",
//     details: {
//         author: 'Ed sheeran',
//         year: 2015
//     }
// }

// const song = 'New Song';

// const { song: anotherSong, songDuration: duration, details} = audioPlayer;
// const { author } = details;

// console.log('Song: ', anotherSong );
// console.log('Duration: ', duration );
// console.log('Author: ', author );

// const dbz: string[] = ['Goku','Vegeta','Trunks'];
// const [ p1, p2, Trunks ]: string[] = ['Goku','Vegeta'];
const [ , , Trunks = 'Not found' ]: string[] = ['Goku','Vegeta'];


console.log('Personaje 3:', Trunks);




export{}