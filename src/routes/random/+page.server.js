
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
