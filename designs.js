document.addEventListener('DOMContentLoaded', function () {
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
    function setBackgroundColor(cell) {
        cell.style.backgroundColor = color.value;
    }

    // When size is submitted by the user, call makeGrid()
    function makeGrid() {
        removeGrid();
        for (let i = 1; i <= parseInt(height.value); i++) {
            const row = document.createElement('tr');
            pixelCanvas.appendChild(row);
            for (let j = 1; j <= parseInt(width.value); j++) {
                const cell = document.createElement('td');
                row.appendChild(cell);
            }
        }
    }

    // Attach event listener to cells
    function cellListeners() {
        const cells = document.getElementsByTagName('td');
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', function(event) {
                if (event.target.nodeName === "TD") {
                    setBackgroundColor(this);
                }
            });
        }
    }

    // Event Listener for the submit button
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        makeGrid();
        cellListeners();
    });
});