/* Table of Content - Pixel Art Maker JavaScript
==================================================
  1.Input Selectors
  2.Make Grid Function
  3.Change Cell Color Function
  4.Event Listener
*/

/*Input Selectors 
=====================*/
// Select Canvas input
const canvas = document.querySelector('#pixelCanvas');
//Select Form Size Picker
const sizePicker = document.querySelector('#sizePicker');
// Select color input
const color = document.querySelector('#colorPicker');
// Select size input by Height #frontend-web-dev
const height = document.querySelector('#inputHeight');
// Select size input by Width
const width = document.querySelector('#inputWidth');


function clearOldGrid() {
    // clears the old grid first
    canvas.innerHTML = '';
}

/*Make Grid Function 
=====================*/
function makeGrid() {
    let tr, td; //initialize tr and td
    /*creates table: (for loop runs from inside, then outside). create td, 
    append to tr; create tr, tr to table(canvas).*/
    for (let i = 0; i < height.value; i++) {
        tr = document.createElement('tr');
        canvas.appendChild(tr);
        for (let j = 0; j < width.value; j++) {
            td = document.createElement('td');
            tr.appendChild(td);
        }
    }
}

/*Change Cell Color Function
=====================*/
function changeCellColor() {
    //check which TD is clicked, change its color (Udacity Lesson 21: 5.0)
    canvas.addEventListener('click', function(e) {
        e.preventDefault();
        // check using capital letters
        if (e.target.nodeName === 'TD') {
            e.target.style.backgroundColor = color.value;
        }
    })
}

/*Event Listener 
=====================*/
sizePicker.addEventListener('submit', function(e) {
/* When size is submitted by the user, call makeGrid(). 
Also clears or resets previous grid settings and presents with fresh canvas to start a new.*/
    e.preventDefault();
    clearOldGrid();
    makeGrid();
    changeCellColor();
})