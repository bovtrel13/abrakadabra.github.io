document.addEventListener('DOMContentLoaded', () => {
    const currentTime = document.getElementById('currentTime');
    const currentGHS = document.getElementById('gh/s');
    const claimButton = document.getElementById('claimButton');
    const boostButton = document.getElementById('boostButton');
    const tronBalance = document.getElementById('tronBalance');
    const shibBalance = document.getElementById('shibBalance');

    const sendTronButton = document.getElementById('sendTronButton');
    const sendShibButton = document.getElementById('sendShibButton');

    const popupModal = document.getElementById('popupModal');
    const closeModal = document.getElementsByClassName('close')[0];
    const cancelSendButton = document.getElementById('cancelSend');



    let ghPerSecond = 1.0; // Initial GH/s value
    let counterValue = parseFloat(localStorage.getItem('counterValue')) || 0.0000001;



    // Update the counter
    function updateCounter() {
        currentTime.textContent = counterValue.toFixed(6) + ' TRX';
        counterValue +=ghPerSecond/1000000;
        localStorage.setItem('counterValue', counterValue);
    }
    function updateGHS() {
        currentGHS.textContent = ghPerSecond.toFixed(2) + 'GH/S';

    }

    setInterval(updateCounter, 1000);
    updateCounter();  // Initial call to display the initial value immediately

    setInterval(updateGHS, 1000);
    updateGHS();
    // Event listener for the claim button
    claimButton.addEventListener('click', () => {
        if(counterValue>10){
            alert("DONE"+counterValue+"ADD IN YOUR WALLET");
            counterValue-=counterValue-0.00007;
// TO DO: добавление в кошелек

        }
        else if(counterValue<10){
            alert("you have less than 10 TRX");
        }

    });

    // Event listener for the boost button
    boostButton.addEventListener('click', () => {
//TO DO: реализация доната и добавление в GH/S

    });
    sendTronButton.addEventListener('click', () => {
        popupModal.style.display = 'block';
    });

    sendShibButton.addEventListener('click', () => {
        popupModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        popupModal.style.display = 'none';
    });

    cancelSendButton.addEventListener('click', () => {
        popupModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popupModal) {
            popupModal.style.display = 'none';
        }
    });
});
