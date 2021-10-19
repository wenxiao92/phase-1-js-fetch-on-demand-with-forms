const init = () => {
    const inputForm = document.querySelector('form'); //assign the form tag to inputForm variable

    inputForm.addEventListener('submit', (event) => { //This will give you the object of the event that is tied to the submit
      event.preventDefault(); //Prevents page from refreshing when you click the submit button
      //console.log(event.target.children); -> Give you the whole object tied to this event and let you determine how to grab your information based on the index

      //console.log(event.target.children[1].value); After you find the index (1 in this case) put a .value after. This will output the number you submit in the form and show in your console
      //const input = document.querySelector('input#searchByID'); alternative way to find the id and assign it to input. input.value will equal to code above

      // fetch('http://localhost:3000/movies') standard fetch request but can change it to dynamically pick up the website we want (based on the id)
      fetch(`http://localhost:3000/movies/${event.target.children[1].value}`) 
      .then(response => response.json()) //fetch request to grab the JSON
      //.then(data => {console.log(data); //arrow function that will display the data in the console for the id we submitted
      .then(data => {
            const title = document.querySelector('section#movieDetails h4'); //assigns the variable title to the id 'movieDetails' and h4 tag that is under that id
            const summary = document.querySelector('section#movieDetails p'); //assigns the variable summary to the id 'movieDetails' and p tag that is under that id

            title.innerText = data.title; //assigns the inner texts for h4 to equal the title of id's title from the JSON, this will display in the browser as it is added to the HTML via DOM
            summary.innerText = data.summary; //assigns the inner texts for p to equal the summary of id's title from the JSON, this will display in the browser as it is added to the HTML via DOM
    });


});
}

document.addEventListener('DOMContentLoaded', init);