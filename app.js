const button = document.getElementById('myBtn');
const input = document.getElementById('userName');
const messageText = document.getElementById('welcomeMessage');

button.addEventListener('click', function() {
    const name = input.value;

    if (name === "") {
        messageText.innerText = "الرجاء كتابة اسمك أولاً! ⚠️";
        messageText.style.color = "red";
    } else {
        messageText.innerText = "أهلا بك يا ملك البرمجة: " + name + " 😎🔥";
        messageText.style.color = "#00ff88";
    }
});