
import { iWant } from './stores.js';
// console.log({$iWant});

export async function load({ fetch }) {  

  let name = iWant;

  const url = 'https://api.disneyapi.dev/character?name=' + name;

  const artReq = await fetch(url);
  const artRes = await artReq.json();
  const artworks = artRes.data;

  return {
    artworks
  }
}
