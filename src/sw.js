
window.self.addEventListener("push", function (event) {
    const message = event.data.json();
    window.self.registration.showNotification( message.title, { body: message.text });
})