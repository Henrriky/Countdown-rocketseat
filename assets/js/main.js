const finalDate = new Date("2023-06-15T00:00:00-03:00");
setInterval(() => {
    /* 
    1 SEG -> 1000 MILISEG
    1 MIN -> 60SEG
    1 HORA -> 60MIN
    1 DIA -> 24HR
    */
    let actuallyDate = new Date();

    difference = finalDate - actuallyDate;

    if(difference >= 0) {

        days = Math.floor(difference / (1000 * 60 * 60 * 24)); 
        hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
        seconds = Math.floor(difference % (1000 * 60) / 1000);

        document.querySelector('.day h2').innerHTML = `${days.toString().length < 2 ? '0' + days + ' :' : days + ' :'}`;
        document.querySelector('.hour h2').innerHTML = `${hours.toString().length < 2 ? '0' + hours + ' :' : hours + ' :'}`
        document.querySelector('.minute h2').innerHTML = `${minutes.toString().length < 2 ? '0' + minutes + ' :' : minutes + ' :'}`
        document.querySelector('.sec h2').innerHTML = `${seconds.toString().length < 2 ? '0' + seconds : seconds}`
    } else {
        document.querySelector('.day h2').textContent = "00 :"
        document.querySelector('.hour h2').textContent = "00 :" 
        document.querySelector('.minute h2').textContent = "00 :"
        document.querySelector('.sec h2').textContent = "00";
    }
}, 1000);

