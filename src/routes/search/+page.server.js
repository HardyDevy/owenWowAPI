// let searchbar = document.getElementById('searching');
  // searchbar.addEventListener('change', () => {
  //   let name = searchbar.value;
  // });

export async function load({ fetch }) {  
  
  let name = "Santa"

  const url = 'https://api.disneyapi.dev/character?name=' + name;
  
  const artReq = await fetch(url);
  const artRes = await artReq.json();
  const artworks = artRes.data;

  return {
    artworks
  }

}