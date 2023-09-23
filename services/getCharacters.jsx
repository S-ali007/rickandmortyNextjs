export default async function getCharacter() {
    const result = await fetch("https://rickandmortyapi.com/api/character");

    const response = await result.json();
    
    return response
  }