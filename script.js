console.log("ok");

let nameEntry = document.getElementById("name");
let tagName = document.querySelector(".tag-name");
let button = document.getElementById("button");
let nameTag = document.querySelector(".tag");
let classContain = nameTag.classList.contains("none");

button.addEventListener('click', () => {
    if (classContain === true) {
        nameTag.classList.remove("none");
    } else {
        nameTag.classList.add("none");

    }
    let enteredText = nameEntry.value;
    tagName.textContent = enteredText;
    console.log("ok");
});

document.addEventListener('keydown', (event) => {
    var keyValue = event.key;
    console.log(keyValue);
    if (keyValue === "Enter") {
        nameTag.classList.remove("none");
    } else {
        nameTag.classList.add("none");

    }
    let enteredText = nameEntry.value;
    tagName.textContent = enteredText;
    console.log("ok");
});