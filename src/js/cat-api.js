const api_key = 'live_Im4lTddtLfXWJvTJ0UEzmfTfZxBa9IRsUTHPM8VN9bHpstdFlRrToKcY1B0ytkjX'


const url = 'https://api.thecatapi.com/v1/breeds';
const url2 = 'https://api.thecatapi.com/v1/images';
function fetchBreeds() {
  return fetch(`${url}?api_key=${api_key}`).then(response => {
    return response.json();
  });
}

function fetchCatByBreed(breedId) {
  return fetch(`${url2}/search?breed_ids=${breedId}&api_key=${api_key}`).then(response => {
    return response.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
