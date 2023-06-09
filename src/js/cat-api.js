import showLoadingSpinner from '../modules/showLoadingSpinner';
import hideLoadingSpinner from '../modules/hideLoadingSpinner';
import { refs }  from '../modules/refs.js'
const API_KEY = 'live_Im4lTddtLfXWJvTJ0UEzmfTfZxBa9IRsUTHPM8VN9bHpstdFlRrToKcY1B0ytkjX';

export function fetchBreeds() {

return fetch("https://api.thecatapi.com/v1/breeds")
    .then(response => {
        if (!response.ok) {
        throw new Error(response.status);
        }

        return response.json();
    })

}
export function fetchCatByBreed(breedId) {
  showLoadingSpinner();
  refs.loaderText.classList.remove('visually-hidden');

    return fetch(`https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&breed_ids=${breedId}`).then(
        response => {

            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(data => {
                if (data && data.length > 0) {
                  hideLoadingSpinner();
                  refs.loaderText.classList.add('visually-hidden');

                    return data[0];
                          }

        })
        .catch(error => {
          hideLoadingSpinner();
          refs.loaderText.classList.add('visually-hidden');
          refs.errorMsg.classList.remove("visually-hidden");
          console.error('Error:', error.name, error.message);
        })
}



