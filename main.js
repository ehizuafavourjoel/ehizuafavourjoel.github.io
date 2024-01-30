let mobileNav = document.querySelector('.mobile-nav');
let navBtn = document.querySelectorAll('.mobile-nav > ul li')






/* mode function */
const lightMode = () => {
  document.body.classList.remove('dark')
}

const darkMode = () => {
  document.body.classList.add('dark')
}

let navStatus = 'closed'

/* initiating mode */
if (localStorage.getItem('mode')) {
  if (localStorage.getItem('mode') === 'light') {
    lightMode()
  }
  else {
    darkMode()
  }
}

//Mode button direction pop-up
if (document.body.id === 'homePage') {
  if (!localStorage.getItem('mode')) {
    alert('You can toggle the mode of the page with the toggle bar at the top right corner of the Home page')
  }
}




//Menu Toggle
document.querySelector('#menuBtn').addEventListener('click', (e) => {
  if (navStatus === 'closed') {
    mobileNav.classList.add('openNav');
    e.target.innerHTML = '&times';
    navStatus = 'open'
  }
  else {
    mobileNav.classList.remove('openNav');
    navStatus = 'closed';
    e.target.innerHTML = '&#9776';

  }

})

navBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    setTimeout(() => {
      mobileNav.classList.remove('openNav');
      document.querySelector('#menuBtn').innerHTML = '&#9776';
      navStatus = 'closed'
    }, 400)
  })
})



/* Toggle mode */
for (let i = 0; i < 2; i++) {
  document.querySelectorAll('.grid')[i].addEventListener('click', (e) => {
    if (i === 0) {
      lightMode()
      localStorage.setItem('mode', 'light')
    }
    else {
      darkMode()
      localStorage.setItem('mode', 'dark')
    }
  })
}


