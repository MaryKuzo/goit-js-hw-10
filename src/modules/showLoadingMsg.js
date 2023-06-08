import { refs }  from './refs.js'

export default function showLoadingMsg() {
    refs.loadingMsg.classList.remove('visually-hidden');
}