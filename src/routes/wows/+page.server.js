// default fetch load from sveltekit docs @ https://kit.svelte.dev/docs/load#making-fetch-requests
// export async function load({ fetch, params }) {
//   const res = await fetch('/api/items/${params.id}');
//   const item = await res.json();
//   return { artwork };
// }

// _______________________________________________________________________________________________

// Eric's fetch function

// my fetch function
export async function load({ fetch }) {  
  // const year = Math.floor(Math.random() * 10000) + 1;
  const year = 2010;

  const url = 'https://owen-wilson-wow-api.onrender.com/wows/random?results=2&year=' + year;

  const wowReq = await fetch(url);
  
  const wowRes = await wowReq.json();

  const wows = wowRes.data;

  return {
    wows
  }

}

// _______________________________________________________________________________________________

// Example on API's website

// const options = {method: 'GET', headers: {accept: 'application/json'}};

// fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=2&year=2010', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));