// default fetch load from sveltekit docs @ https://kit.svelte.dev/docs/load#making-fetch-requests
// export async function load({ fetch, params }) {
//   const res = await fetch('/api/items/${params.id}');
//   const item = await res.json();
//   return { artwork };
// }

// _______________________________________________________________________________________________

// Eric's fetch function

// export async function load({ fetch }) {  
//   // const year = Math.floor(Math.random() * 10000) + 1;
//   const year = 2010;

//   const url = 'https://owen-wilson-wow-api.onrender.com/wows/random?results=2&year=' + year;

//   const wowReq = await fetch(url);
  
//   const wowRes = await wowReq.json();

//   const wows = wowRes.data;

//   return {
//     wows
//   }

// }

// _______________________________________________________________________________________________


// ?pageSize
// ?page
// ?

export async function load({ fetch }) {  
  const page = Math.floor(Math.random() * 100) + 1;

  const url = 'https://api.disneyapi.dev/characters?page=' + page + '&pageSize=27';
  

  const artReq = await fetch(url);
  
  const artRes = await artReq.json();

  const artworks = artRes.data;

  return {
    artworks
  }

}