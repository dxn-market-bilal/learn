const button = document.getElementById('myBtn');
const inputName = document.getElementById('userName');
const inputPhone = document.getElementById('userPhone'); // صيّحنا لحقل الهاتف الجديد
const messageText = document.getElementById('welcomeMessage');

// حط رابط السيرفر الخاص بيك هنا
const scriptURL = 'https://script.google.com/macros/s/AKfycbyiDtaNjmpA7Q_qEVvAgKabvR9EWAmreLfv-P3LvcVlTSus0en1D8V0jUk5Nbhb4QHQxw/exec';

button.addEventListener('click', function() {
    const name = inputName.value;
    const phone = inputPhone.value; // سحبنا الرقم اللّي كتبه المستخدم

    // التأكد من إن الحقلين مو فارغات
    if (name === "" || phone === "") {
        messageText.innerText = "الرجاء ملء جميع الحقول أولاً! ⚠️";
        messageText.style.color = "red";
    } else {
        messageText.innerText = "جاري إرسال بياناتك وحفظها... ⏳";
        messageText.style.color = "yellow";

        // دمجنا الاسم ورقم الهاتف سوا بداخل رابط الإرسال
        fetch(scriptURL + "?userName=" + encodeURIComponent(name) + "&userPhone=" + encodeURIComponent(phone), { method: 'POST' })
        .then(response => {
            messageText.innerText = "تم حفظ بياناتك بنجاح في الجدول! 😎🔥";
            messageText.style.color = "#00ff88";
            inputName.value = ""; // تفريغ حقل الاسم
            inputPhone.value = ""; // تفريغ حقل الهاتف
        })
        .catch(error => {
            messageText.innerText = "عذراً، حدث خطأ في الاتصال! ❌";
            messageText.style.color = "red";
        });
    }
});
