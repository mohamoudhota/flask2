// script.js
document.getElementById('sampleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const date = document.getElementById('date').value;
    const test = document.getElementById('test').value;

    const message = `Blood sample collection request submitted successfully for ${name} at ${address} on ${date} for ${test} test.`;

    document.getElementById('message').textContent = message;

    // إرسال رسالة واتساب
    const whatsappMessage = `Name: ${name}, Address: ${address}, Date: ${date}, Test: ${test}`;
    const phoneNumber = '+218916660216';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
});
