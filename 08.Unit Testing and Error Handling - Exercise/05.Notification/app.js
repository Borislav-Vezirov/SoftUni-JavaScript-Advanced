function notify(message) {
    let getNotification = document.getElementById('notification')
    getNotification.textContent = message;
    getNotification.style.display = 'block';

    getNotification.addEventListener('click', () => {
      getNotification.style.display = 'none'; 
    });
}
