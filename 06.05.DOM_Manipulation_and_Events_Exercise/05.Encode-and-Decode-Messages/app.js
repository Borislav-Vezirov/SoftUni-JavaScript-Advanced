function encodeAndDecodeMessages() {
    let encodeArea = document.querySelector('#main div:nth-child(1) textarea');
    let decodeArea = document.querySelector('#main div:nth-child(2) textarea');

    let encodeButton = document.querySelector('#main div:nth-child(1) button');
    let decodeButton = document.querySelector('#main div:nth-child(2) button');

    let originMessage = '';

    encodeButton.addEventListener('click', () => {
        let message = encodeArea.value;
        originMessage = message;
        let result = ''
        for (let i = 0; i < message.length; i++) {
            let char = message.charCodeAt(i)
            result += String.fromCharCode(char + 1);
        }
        encodeArea.value = '';
        decodeArea.value = result;
    })

    decodeButton.addEventListener('click', () => {
        decodeArea.value = originMessage;
    })
}