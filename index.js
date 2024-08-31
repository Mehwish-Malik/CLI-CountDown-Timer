#! /usr/bin/env node
import { differenceInSeconds } from "date-fns/differenceInSeconds";
function* countDownTimer(second) {
    while (second > 0) {
        yield second;
        second--;
    }
}
// step 2(Initialization of counter)
let timerIterator = countDownTimer(15);
// function to create count down timer
function displayCountDown() {
    // value below 10
    let result = timerIterator.next();
    if (!result.done) {
        const now = new Date();
        //    calculate minutes in time
        const countDownTime = new Date(now.getTime() + (result.value * 1000));
        // Calculate remaining seconds in time
        const remainingSeconds = differenceInSeconds(countDownTime, now);
        console.log(`Remaining Seconds:${remainingSeconds}`);
        setTimeout(displayCountDown, 1000);
    }
    else {
        // display result countDown Complete
        console.log("CountDown Completed!!");
    }
}
displayCountDown();
