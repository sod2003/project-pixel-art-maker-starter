// Select color input
const color = document.getElementById('colorPicker');
// Select size input
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
// Select Pixel Canvas and Submit Button
const pixelCanvas = document.getElementById('pixelCanvas');
const submitButton = document.getElementById('submit');

// Function to clear Pixel Canvas
function removeGrid() {
    while (pixelCanvas.firstChild) {
        pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
}

// Set background color of element
function setBackgroundColor(event) {
    
    // console.log(event);
    event.currentTarget.style.backgroundColor = color.value;
}

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    removeGrid();
    for (let i = 1; i <= parseInt(height.value); i++) {
        const row = document.createElement('tr');
        for (let j = 1; j <= parseInt(width.value); j++) {
            const cell = document.createElement('td');
            cell.addEventListener('onClick', setBackgroundColor(event));
            row.appendChild(cell);
        }
        pixelCanvas.appendChild(row);
    }
}
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    makeGrid();
});