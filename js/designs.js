/* Table of Content - Pixel Art Maker JavaScript
==================================================
  1.Input Selectors (Constant Variables)
  2.Make Grid Function 
  3.Change Cell Color Function
  4.Event Listeners

Input Selectors 
=====================*/
// Select size input by Height
const height = $("#inputHeight");
// Select size input by Width
const width = $("#inputWidth");
//Select Form Size Picker
const color = $("#colorPicker");
// Select Canvas input constant variable
const artCanvas = $("#pixelCanvas");


//makeGrid function that removes previous table and then new grid is built with help of for-loop using jQuery Selectors
function makeGrid() {

    let heightValue = height.val();
    let widthValue = width.val();

    for (let h = 0; h < heightValue; h++) {
      artCanvas.append("<tr></tr>");
    }

    for (let w = 0; w < widthValue; w++) {
      $('tr').append("<td></td>"); // this will 
    }    
}

function clearPixelArt() {
    artCanvas.empty();
}
// addEventListeners for Activities
$("table").on("click", "td", function(){
        //apply color -- undo and redo effect
        ($( this ).attr('style')) ? $(this).css("backgroundColor", "") : $(this).css("backgroundColor", color.val());
});

$("#submitButton").on("click", function(event) {

//Also clears or resets previous grid settings and presents with fresh canvas to start a new grid.
    clearPixelArt();
    event.preventDefault();
    // When size is submitted by the user, call makeGrid() function to create pixel grid canvas. 
    makeGrid();
});

$("#submitButton2").on("click", function() {
    clearPixelArt();
});

$("#newPixelArt").click(function(event){
    $("td").removeAttr("style");
    event.preventDefault();
});
