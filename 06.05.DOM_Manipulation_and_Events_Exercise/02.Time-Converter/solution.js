function attachEventsListeners() {

    let daysElement    = document.querySelector('#days'); 
    let hoursElement   = document.querySelector('#hours'); 
    let minutesElement = document.querySelector('#minutes'); 
    let secondsElement = document.querySelector('#seconds');
     
    document.querySelector('#daysBtn').addEventListener('click', () => {
        let days = daysElement.value;
        hoursElement.value   = days * 24;
        minutesElement.value = days * 1440;
        secondsElement.value = days * 86400;
    })

    document.querySelector('#hoursBtn').addEventListener('click', () => {
        let hours = hoursElement.value;
        daysElement.value    = hours / 24;
        minutesElement.value = hours * 60;
        secondsElement.value = hours * 3600;
    })

    document.querySelector('#minutesBtn').addEventListener('click', () => {
        let minutes = minutesElement.value;
        hoursElement.value   = minutes / 60;
        daysElement.value    = minutes / 1440;
        secondsElement.value = minutes * 60;
    })

    document.querySelector('#secondsBtn').addEventListener('click', () => {
        let seconds = secondsElement.value;
        hoursElement.value   = seconds / 3600;
        minutesElement.value = seconds / 60;
        daysElement.value    = seconds / 86400;
    })
}