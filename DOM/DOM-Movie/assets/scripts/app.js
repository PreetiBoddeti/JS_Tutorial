const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;

const movies=[]   //array to add movies

const userInputs=document.querySelectorAll('input')
const entryTextButton=document.getElementById('entry-text')
const cancelAddMovieButton=document.querySelector('.cancel')
console.log(cancelAddMovieButton)

//constant removeMovieButton=document.getElementById('entry-text')
const confirmAddMovieButton=cancelAddMovieButton.nextElementSibling;
console.log(confirmAddMovieButton)

const backdrop=document.getElementById('backdrop')
console.log(backdrop)

const closeMovieModal = () =>{ 
  addMovieModal.classList.remove('visible')
}

const updateUI = () => {
  if(movies.length=== 0){
      entryTextButton.style.display='Block'
  }else{
      entryTextButton.style.display='none'
  }
}

const clearMovieInput= () => {
  for(userInput of userInputs){
    userInput.value=''
  }
}

const removeMovie = (movieId) => {
  let movieIndex=0
  for(movie of movies ){
    if(movie.id=== movieId) {
      break
    }
    movieIndex++ 
  }
  movies.splice(movieIndex,1)
  const listRoot= document.getElementById('movie-list')
  listRoot.children[movieIndex].remove()
}


const renderNewMovie = (id,title, imageURL, rating) => {
  const newMovieElement= document.createElement('li')
  newMovieElement.className='movie-element'
  newMovieElement.innerHTML=`
    <div class="movie-element__image"
      <img src="" alt="${title}>
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating} / 5 stars </p>
    </div>`
    newMovieElement.addEventListener('click',removeMovie.bind(null,id))

    const listRoot= document.getElementById('movie-list')
    listRoot.append(newMovieElement)
}


const toggleBackdrop=()=>{
  backdrop.classList.toggle('visible')
}


const cancelAddMovieHandler = () => {
  closeMovieModal()
  clearMovieInput()
}


const toggleMovieModalHandler = () => { // function() {}
  addMovieModal.classList.toggle('visible');
  toggleBackdrop()
};


const addMovieHandler = () =>{
  const titleValue=userInputs[0].value
  const imageURLValue=userInputs[1].value
  const ratingValue=userInputs[2].value
  if(titleValue.trim()==='' || imageURLValue === '' || ratingValue ==='' || ratingValue < 1 || ratingValue > 5){
    alert('Please enter valid inputs')
    return;
  }

  const newMovie={
    id:Math.random().toString(),
    title:titleValue,
    imageURL:imageURLValue,
    rating:ratingValue
  }

  movies.push(newMovie)
  console.log(newMovie)
  console.log(movies)
  closeMovieModal()
  clearMovieInput()
  renderNewMovie(newMovie.id,newMovie.title,newMovie.imageURL,newMovie.rating)
  updateUI()
  }


const back=()=>{
  closeMovieModal()
}

//EvenHandlers
startAddMovieButton.addEventListener('click', toggleMovieModalHandler);
backdrop.addEventListener('click',toggleBackdrop)
cancelAddMovieButton.addEventListener('click',cancelAddMovieHandler)
confirmAddMovieButton.addEventListener('click',addMovieHandler)