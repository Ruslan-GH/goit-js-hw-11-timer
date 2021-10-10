const timerDays = document.querySelector('[data-value="days"]')
const timerHours = document.querySelector('[data-value="hours"]')
const timerMins = document.querySelector('[data-value="mins"]')
const timerSecs = document.querySelector('[data-value="secs"]')

class Timer {
    constructor(finishDate, markup) {
        this.markup = markup;
        this.finishDate = finishDate;
        this.intervalId = null;
        this.deltaTime = 0;        
    }
    start() {
        this.intervalId = setInterval(() => {
            let currentTime = Date.now()
            this.deltaTime = this.finishDate - currentTime;
            const days = this.pad(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)));
            const hours = this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            const mins = this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
            const secs = this.pad(Math.floor((this.deltaTime % (1000 * 60)) / 1000));
            // console.log(days, hours, mins, secs)
            this.insertValues(days, hours, mins, secs)

        }, 1000)
    }
    // // stop() {
    // //     clearInterval(this.intervalId)
    // }
    pad(value) {
        return String(value).padStart(2, '0')
    }
    insertValues(d, h, m, s) {
        const { timerDays, timerHours, timerMins, timerSecs } = this.markup;
        timerDays.textContent = d;
        timerHours.textContent = h;
        timerMins.textContent = m;
        timerSecs.textContent = s;
    }
}

const myTimer = new Timer(new Date('jan 1, 2022'), {timerDays, timerHours, timerMins, timerSecs})
myTimer.start()
// myTimer.stop()



// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);