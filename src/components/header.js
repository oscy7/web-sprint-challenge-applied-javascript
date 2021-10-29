//import { query } from "express";

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headerDiv = document.createElement('div');
  const mySpan = document.createElement('span');
  const myH1 = document. createElement('h1');
  const tempSpan = document.createElement('span');

  

  headerDiv.classList.add('header');
  mySpan.classList.add('date');
  tempSpan.classList.add('temp'); 

  mySpan.textContent = date;
  myH1.textContent = title;
  tempSpan.textContent = temp;

  headerDiv.appendChild(mySpan);
  headerDiv.appendChild(myH1);
  headerDiv.appendChild(tempSpan);

  return headerDiv;

}

//const mySelector = document.querySelector('.header-container')
//mySelector.appendChild(Header('mytitle', 'dateee', 'timee'))

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  const mySelector = document.querySelector(selector).appendChild(Header('Lambda Title', 'Lambda Date', 'Lambda Temp'))


  return mySelector
}

// Header('Oscar', 'Nov 2', '85')
// headerAppender('.header-container');


export { Header, headerAppender }
