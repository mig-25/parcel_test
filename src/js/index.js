import {bro} from './lib/bro'
import '../styles/main.scss'


window.onload = function () {
    document.querySelector('#myId').textContent = bro(`How is it going`)
}