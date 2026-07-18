const button = document.getElementById('myBtn');
const inputName = document.getElementById('userName');
const inputPhone = document.getElementById('userPhone');
const selectCity = document.getElementById('userCity'); // صيّحنا للقائمة المنسدلة
const messageText = document.getElementById('welcomeMessage');

const scriptURL = 'https://script.google.com/macros/s/AKfycbyiDtaNjmpA7Q_qEVvAgKabvR9EWAmreLfv-P3LvcVlTSus0en1D8V0jUk5Nbhb4QHQxw/exec';

button.addEventListener('click', function() {
    const name = inputName.value;
    const phone = inputPhone.value;
    const city = selectCity.value; // سحبنا الخيار اللّي اختاره المستخدم

    // التأكد من إن كل الحقول ممتلئة والقائمة تم الاختيار منها
    if (name === "" || phone === "" || city === "") {
        messageText.innerText = "الرجاء ملء جميع الحقول واختيار المدينة! ⚠️";
        messageText.style.color = "red";
    } else {
        messageText.innerText = "جاري إرسال بياناتك... ⏳";
        messageText.style.color = "yellow";

        // أضفنا المدينة &userCity بداخل رابط الإرسال
        fetch(scriptURL + "?userName=" + encodeURIComponent(name) + "&userPhone=" + encodeURIComponent(phone) + "&userCity=" + encodeURIComponent(city), { method: 'POST' })
        .then(response => {
            messageText.innerText = "تم حفظ بياناتك واختيار مدينتك بنجاح! 😎🔥";
            messageText.style.color = "#00ff88";
            inputName.value = ""; 
            inputPhone.value = ""; 
            selectCity.value = ""; // إعادة القائمة للوضع الافتراضي
        })
        .catch(error => {
            messageText.innerText = "عذراً، حدث خطأ في الاتصال! ❌";
            messageText.style.color = "red";
        });
    }
});
