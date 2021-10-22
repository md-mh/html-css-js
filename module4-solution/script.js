var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


function click() {
    const text = document.getElementById('text').value;
    if (text.startsWith('j')) {
        console.log('Goodbye ' + text);
    }
    else if (text.startsWith('J')) {
        console.log('Goodbye ' + text);
    } else {
        console.log('Hello ' + text);
    }

}

document.getElementById('click').addEventListener("click", click);
