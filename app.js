const button = document.getElementById('myBtn');
const inputName = document.getElementById('userName');
const inputPhone = document.getElementById('userPhone');
const selectCity = document.getElementById('userCity');
const messageText = document.getElementById('welcomeMessage');
const spinner = document.getElementById('loadingSpinner');

const scriptURL = 'https://script.google.com/macros/s/AKfycbyiDtaNjmpA7Q_qEVvAgKabvR9EWAmreLfv-P3LvcVlTSus0en1D8V0jUk5Nbhb4QHQxw/exec';

button.addEventListener('click', function() {
    const name = inputName.value.trim();
    const phone = inputPhone.value.trim();
    const city = selectCity.value;

    // 1. الفحص الأول: هل اكو حقول فارغة؟
    if (name === "" || phone === "" || city === "") {
        showError("الرجاء ملء جميع الحقول واختيار المدينة! ⚠️");
        return;
    }

    // 2. الفحص الثاني: هل رقم الهاتف يحتوي على أحرف؟ (قانون الأرقام فقط)
    if (isNaN(phone)) {
        showError("رقم الهاتف يجب أن يحتوي على أرقام فقط! ❌");
        return;
    }

    // إذا كلشي تمام، نبلش الإرسال ونشغل المؤشر
    messageText.innerText = "جاري إرسال بياناتك وحفظها... ⏳";
    messageText.style.color = "yellow";
    spinner.style.display = "block";

    fetch(scriptURL + "?userName=" + encodeURIComponent(name) + "&userPhone=" + encodeURIComponent(phone) + "&userCity=" + encodeURIComponent(city), { method: 'POST' })
    .then(response => {
        messageText.innerText = "تم حفظ بياناتك واختيار مدينتك بنجاح! 😎🔥";
        messageText.style.color = "#00ff88";
        spinner.style.display = "none";
        
        // تصفير الحقول
        inputName.value = ""; 
        inputPhone.value = ""; 
        selectCity.value = ""; 
    })
    .catch(error => {
        showError("عذراً، حدث خطأ في الاتصال بالسيرفر! ❌");
    });
});

// دالة زغيرة لتسهيل إظهار الأخطاء واختصار الكود
function showError(msg) {
    messageText.innerText = msg;
    messageText.style.color = "red";
    spinner.style.display = "none";
}
