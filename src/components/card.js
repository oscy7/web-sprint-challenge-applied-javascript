import axios from 'axios';
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div')
  const imgDiv = document.createElement('div');
  const imgSRC = document.createElement('img');
  const authorSpan = document.createElement('span');

  card.appendChild(headlineDiv);
  card.appendChild(authorDiv);
  authorDiv.appendChild(imgDiv);
  imgDiv.appendChild(imgSRC);
  authorDiv.appendChild(authorSpan);

  card.classList.add('card');
  headlineDiv.classList.add('author');
  imgDiv.classList.add('img-container');

  headlineDiv.textContent = article.headline
  imgSRC.setAttribute('src', article.authorPhoto)
  authorSpan.textContent = article.authorName

  card.addEventListener('click', () => {
    console.log(article.headline)
  })

return card
}
//console.log('hi')

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const cardSelector = document.querySelector(selector);
  console.log(cardSelector)
  axios.get(`http://localhost:5001/api/articles`)
  .then(resp => {
    
    const myArray = Object.values(resp.data.articles)
    //console.log(myArray)
    //cardSelector.appendChild(Card(myArray))
    myArray.forEach(element => {
      element.forEach( x =>{
        //console.log(x)
        const allArticles = Card(x);
        //console.log(allArticles)
        cardSelector.appendChild(allArticles);
      })
    })
  })
  .catch(error => {
    console.log(error)
  })
}

cardAppender('.cards-container')

export { Card, cardAppender }
