function updateBackground(event) {
    const x = event.clientX;
    const y = event.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const red = Math.round((x / width) * 255);
    const blue = Math.round((y / height) * 255);
    const green = Math.round(((x + y) / (width + height)) * 255);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function showAlert() {
    alert("Surprise! Welcome to Anime World!");
}

function changeStyle(element) {
    element.style.backgroundColor = "gold";
    element.style.color = "black";
    element.textContent = "Clicked!";
}

function populateList() {
    const list = document.getElementById("dynamic-list");
    const characters = ["Naruto Uzumaki", "Eren Yeager", "Monkey D. Luffy", "Light Yagami", "Mikasa Ackerman"];
    list.innerHTML = ""; 
    characters.forEach(character => {
        const li = document.createElement("li");
        li.textContent = character;
        list.appendChild(li);
    });
}

let userVote = 'None';

function vote(character) {
    userVote = character;
    document.getElementById('poll-result').innerText = `Your vote: ${character}`;
}

function showAlert() {
    alert("Surprise! Keep watching anime!");
}

function populateList() {
    const characters = ['Naruto Uzumaki', 'Sasuke Uchiha', 'Eren Yeager', 'Luffy'];
    const list = document.getElementById('dynamic-list');
    
    list.innerHTML = ''; 
    characters.forEach(character => {
        const listItem = document.createElement('li');
        listItem.textContent = character;
        list.appendChild(listItem);
    });
}

function updateBackground(event) {
    document.body.style.backgroundColor = `rgb(${event.clientX % 255}, ${event.clientY % 255}, 180)`;
}
