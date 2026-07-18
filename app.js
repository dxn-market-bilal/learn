const button = document.getElementById('myBtn');
const input = document.getElementById('userName');
const messageText = document.getElementById('welcomeMessage');

// 🌟 حط الرابط الطويل اللّي نسخته من غوغل بين هذي العلامات 🌟
const scriptURL = 'https://script.google.com/macros/s/AKfycbyiDtaNjmpA7Q_qEVvAgKabvR9EWAmreLfv-P3LvcVlTSus0en1D8V0jUk5Nbhb4QHQxw/exec';

button.addEventListener('click', function() {
    const name = input.value;

    if (name === "") {
        messageText.innerText = "الرجاء كتابة اسمك أولاً! ⚠️";
        messageText.style.color = "red";
    } else {
        messageText.innerText = "جاري إرسال اسمك وحفظه بالجدول... ⏳";
        messageText.style.color = "yellow";

        // 🧠 السحر اللّي يربط الموقع بالسيرفر ويخزن بالـ Google Sheets تلقائياً
        fetch(scriptURL + "?userName=" + encodeURIComponent(name), { method: 'POST' })
        .then(response => {
            messageText.innerText = "أهلا بك يا ملك البرمجة: " + name + " 😎🔥 (تم الحفظ بالجدول!)";
            messageText.style.color = "#00ff88";
            input.value = ""; // تفريغ الحقل بعد الإرسال الناجح
        })
        .catch(error => {
            messageText.innerText = "عذراً، حدث خطأ في الاتصال بالسيرفر! ❌";
            messageText.style.color = "red";
        });
    }
});
