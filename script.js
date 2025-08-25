document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = 'Message can not be sent due to error, Please reachout to: smsadi19@gmail.com';
    alert("Message can not be sent due to error, Please reachout to: smsadi19@gmail.com")
    this.reset();
});