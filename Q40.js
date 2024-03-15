"use strict";
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album
Object.defineProperty(exports, "__esModule", { value: true });
function makeAlbum(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating three different albums by Pakistani artists
const album1 = makeAlbum("Atif Aslam", "Doorie");
console.log(album1);
const album2 = makeAlbum("Ali Zafar", "Huqa Pani", 10); // Album with specified number of tracks
console.log(album2);
const album3 = makeAlbum("Nazia Hassan", "Disco Deewane");
console.log(album3);
