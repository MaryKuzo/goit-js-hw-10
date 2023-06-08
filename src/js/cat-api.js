import showLoadingMsg from '../modules/showLoadingMsg';
import hideLoadingMsg from '../modules/hideMLoadinMsg';
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
    showLoadingMsg();
    return fetch(`https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&breed_ids=${breedId}`).then(
        response => {

            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then(data => {
                if (data && data.length > 0) {
                    hideLoadingMsg();
                    return data[0];
                          }

        })
        .catch(error => {
            hideLoadingMsg();
            refs.errorMsg.classList.remove("visually-hidden");
            console.error('Error:', error.name, error.message);
        })
}


function showLoadingMsg() {
  refs.loadingMsg.classList.remove('visually-hidden');
}


