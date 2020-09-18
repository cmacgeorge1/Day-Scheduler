console.log(moment().format());
console.log(moment().format("h A"));

// TODO create one row with time, text area, and button using JQ
// Layout of what we need to make using JQ
{/* <div class="row time-block">
        <div class="col-md-2 hour">
          9 AM
        </div>
        <textarea class="col-md-8 past first">

        </textarea>
        <button class="col-md-2 saveBtn">
          Save
        </button>
      </div> */}

      // TODO shwo the time at the top of the container, using moment.js, grab the time and set the text of the P tag witht eh id of currentDay to be our time from moment.js

      // TODO Create an array to hold the hours that I need
      var hours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

      //TODO using for a loop

      // TODO loop over my arry of hours an dcreate a dive for row, create dive for hours, texarea, and a button

      // TODO gi thte elements some content 

      // TODO how can i cmpare the hours of my rows, to the current time? (use moment.js to get the current time and compare to the time that is being assigned to the row)

      // TODO give the elements the classes that they need e.g using an if statement we can check using moment.js to see if the hour that we are looping overis pas the current hour. if so give the text area the class of past

      // TODO create click eventListener for my buttons

      // TODO Grab the value of the textarea and save it to a var (I need to be able to save the text from the textarea that is in the same row as my button)

      // TODO using localStorage.setItem save the text to local storage 

      // TODO retrieve the data from local storage using localStorage.getItem and show them back on the text area that they belong to (How can i know what text from local storage goes to what text area?)