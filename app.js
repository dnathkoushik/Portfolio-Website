document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        showInstantReply(`Thank you, ${name}! Your message has been received. We'll get back to you shortly.`);
        this.reset();
    } else {
        showInstantReply('Please fill in all required fields.');
    }
});

function showInstantReply(message) {
    const replyContainer = document.createElement('div');
    replyContainer.className = 'instant-reply';
    replyContainer.textContent = message;
    document.body.appendChild(replyContainer);
    setTimeout(() => {
        replyContainer.remove();
    }, 5000);
}
