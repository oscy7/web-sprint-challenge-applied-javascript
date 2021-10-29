import axios from 'axios';

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const topic = document.createElement('div');

  //const tabs = [];
  for(let i = 0; i < topics.length; i++){
    const x = document.createElement('div');
    x.classList.add('tab');
    //tabs.push(x);
    console.log(topics[i])
    x.textContent = topics[i];
    topic.appendChild(x);
  }
  topic.classList.add('topics');
  
  console.log(topic)
  //console.log(tabs)

  return topic

}
const myFx = Tabs(['Javascript', 'python', 'potato']);
console.log(myFx)

// const mySelectorTwo = document.querySelector('.topics').appendChild(Tabs(['Javascript', 'python', 'potato']))

// mySelectorTwo


const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const tabsSelector = document.querySelector(selector);

  axios.get('http://localhost:5000/api/topics')
  .then(resp => {
    console.log('this is working')
    const tabs = Tabs(resp);
    tabsSelector.appendChild(tabs);
  })
  .catch(error => {
    console.log(error)
  })

}

export { Tabs, tabsAppender }
