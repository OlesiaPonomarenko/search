
const searchInput = document.querySelector('#search');
const movies = document.querySelectorAll('.movie');
const picture = document.querySelectorAll('.faceHeader');

searchInput.addEventListener('keyup', (event) => {

    const word = event.target.value.toLowerCase();
    movies.forEach(item => {
        item.querySelector('p').textContent.toLowerCase().includes(word) ? (item.style.display='block') : (item.style.display='none');
    })
})

picture.forEach( item =>{
   item.addEventListener('mouseover', () => {
    deleteclass();
    item.classList.add('new');
})
deleteclass = () => {
    picture.forEach( item => {
    item.classList.remove('new');
    })
}
})

picture.forEach( item => {
    item.addEventListener('click', () => {
        deleteclass();
        item.classList.add('new');
    })
})
