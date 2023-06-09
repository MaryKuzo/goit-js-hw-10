import hideLoadingSpinner from '../modules/hideLoadingSpinner'
import { refs }  from '../modules/refs.js'
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import showLoadingSpinner from '../modules/showLoadingSpinner';


showLoadingSpinner()
refs.selector.classList.add('visually-hidden');
refs.errorMsg.classList.add('visually-hidden');
refs.loaderText.classList.remove('visually-hidden');


fetchBreeds()
    .then(data => {
      hideLoadingSpinner();
      refs.selector.classList.remove('visually-hidden');
      refs.errorMsg.classList.add('visually-hidden');
      refs.loaderText.classList.add('visually-hidden');

        data.forEach(breed => {
        const catBreed = document.createElement('option');
        catBreed.value = breed.id;
        catBreed.textContent = breed.name;
        refs.selector.appendChild(catBreed);

    });
    })
    .catch(error => {
      hideLoadingSpinner();

        refs.errorMsg.classList.remove("visually-hidden");
        console.error('Error:', error.name, error.message);
    });

refs.selector.addEventListener('change', () => {
    const breedId = refs.selector.value;
    fetchCatByBreed(breedId)
        .then(breedData => {
            if (breedData) {
                console.log(breedData);
            let breedImg = document.createElement('img');
                    breedImg.src = breedData.url;
                    breedImg.style.maxWidth = "560px"
            let breedName = document.createElement('h2');
                    breedName.textContent = breedData.breeds[0].name;
            let breedDescr = document.createElement('p');
                    breedDescr.textContent = breedData.breeds[0].description;
            let breedTemper = document.createElement('p');
              breedTemper.innerHTML = '<b>Temperament 🐱: </b>' + breedData.breeds[0].temperament;
            let breedOrigin = document.createElement('p');
              breedOrigin.innerHTML = '<b>Origin 🌎: </b>' + breedData.breeds[0].origin;
            let breedWeight = document.createElement('p');
              breedWeight.innerHTML = '<b>Weight 🐈: </b>' + breedData.breeds[0].weight.imperial;
            refs.infoArea.innerHTML = '';
              refs.infoArea.append(breedImg, breedName, breedDescr, breedTemper, breedOrigin, breedWeight);
             }
        })

});

