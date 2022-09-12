const countdown = document.querySelector(".counter")
let time = 10;
countdown.innerText = time--;
setTimeout(() => {
    countdown.innerText=time--;
    setTimeout(() => {
        countdown.innerText=time--;
        setTimeout(() => {
            countdown.innerText=time--;
            setTimeout(() => {
                countdown.innerText=time--;
                setTimeout(() => {
                    countdown.innerText=time--;
                    setTimeout(() => {
                        countdown.innerText=time--;
                        setTimeout(() => {
                            countdown.innerText=time--;
                            setTimeout(() => {
                                countdown.innerText=time--;
                                setTimeout(() => {
                                    countdown.innerText=time--;
                                    setTimeout(() => {
                                        countdown.innerText=time--;
                                        setTimeout(() => {
                                            countdown.innerText="Hello People";
                                        }, 2000);
                                    }, 2000);
                                }, 2000);
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);