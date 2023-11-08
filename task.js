function linkAlert() {
    alert("You clicked the link!");
}


function showAlert(message) {
    alert(message);
}


function deleteRow(row) {
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById("studentTable").deleteRow(i);
}



function changeImage(source) {
    document.getElementById("image").src = source;
}




let count = 0;
const counterElement = document.getElementById('counter');

function updateCounter() {
    counterElement.textContent = count;
}

function increaseCounter() {
    count++;
    updateCounter();
}

function decreaseCounter() {
    count--;
    updateCounter();
}