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


// cathedral

cathedral.addEventListener('mouseover', () => {
    siteDiv.style.backgroundImage = 'url("images/3-st-maurice-cathedral.jpeg")';
    siteDiv.style.backgroundSize = 'contain';
});

cathedral.addEventListener('mouseleave', () => {
    siteDiv.style.background = '#242c1e';
})

// temple

temple.addEventListener('mouseover', () => {
    siteDiv.style.backgroundImage = 'url("images/4-temple.jpeg")';
    siteDiv.style.backgroundSize = 'contain';
})

temple.addEventListener('mouseleave', () => {
    siteDiv.style.background = '#242c1e';
})

// theater

theater.addEventListener('mouseover', () => {
    siteDiv.style.backgroundImage = 'url("images/5-theater.png")';
    siteDiv.style.backgroundSize = 'contain';
})

theater.addEventListener('mouseleave', () => {
    siteDiv.style.background = '#242c1e';
})