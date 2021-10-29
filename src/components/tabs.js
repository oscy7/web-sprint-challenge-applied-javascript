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

  const tabs = [];
  for(let i = 0; i < 4; i++){
    tabs.push(document.createElement('div'))
  }

  tabs.forEach(element => {
    element.classList.add('tab')
  });

  // tabs.forEach(element => {
  //   topic.appendChild(element);
  // });

  topic.appendChild(tabs[0])
  topic.appendChild(tabs[1])
  topic.appendChild(tabs[2])
  topic.classList.add('topics');

  
  console.log(topic)
  console.log(tabs)
  // const tab1 = document.createElement('div');
  // const tab2 = document.createElement('div');
  // const tab3 = document.createElement('div');

  // topic.appendChild(tab1);
  // topic.appendChild(tab2);
  // topic.appendChild(tab3);

  
  
return topic

}

Tabs();




const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
