console.log('hey')
import modeStatus from "../main"
console.log(modeStatus)

/* mode function */
const lightMode = () => {
    document.body.classList.remove('dark')
}

const darkMode = () => {
    document.body.classList.add('dark')
}


/* initiating mode */
if (localStorage.getItem('mode')) {
    if (localStorage.getItem('mode') === 'light') {
        lightMode()
    }
    else {
        darkMode()
    }
}
