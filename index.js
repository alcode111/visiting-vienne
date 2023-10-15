let heroTitle = document.querySelector('#hero-title');

let cathedral = document.querySelector('#cathedral');
let temple = document.querySelector('#temple');
let theater = document.querySelector('#theater');


let heroDiv = document.querySelector('#hero');
let siteDiv = document.querySelector('#site');


// hero

heroTitle.addEventListener('mouseover', () => {
    heroDiv.style.backgroundImage = 'url("images/7-panorama.jpeg")';
    heroDiv.style.backgroundSize = '100% 100%';
})

heroTitle.addEventListener('mouseleave', () => {
    heroDiv.style.backgroundImage = 'url("images/1-vienne.jpeg")';
    heroDiv.style.backgroundSize = 'contain';
})