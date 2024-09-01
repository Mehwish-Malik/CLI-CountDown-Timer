#! /usr/bin/env node
// Step 1
import {input} from "@inquirer/prompts"
import { number } from "@inquirer/prompts";
import { DifferenceInSecondsOptions } from "date-fns";
import { differenceInSeconds } from "date-fns/differenceInSeconds";
const name = await input({
    message:"Enter Your Name"
    
});
console.log(name);
const answer = await number({
    message:"Enter The Amount Of Seconds To Start Counting",
    validate:(input:any) =>{
        if(isNaN(input)){
            return "please enter valid Number"
        }else if (input > 60){
            return "Seconds must be in 60"
        }else {
            return true;
        }
    }
})
console.log(answer);
let inPut:any = answer

function countDownTimer(second:number){
const intTime = new Date().setSeconds(new Date().getSeconds() + second)
const intervalTime = new Date(intTime)
setInterval((()=>{
    const currentTime = new Date()
    const timeDiff = differenceInSeconds(intervalTime,currentTime)
    if(timeDiff<= 0){
        console.log("Timer has Expired!!");
        process.exit()
    }
    const min = Math.floor((timeDiff%(3600*24))/3600)
    const sec = Math.floor(timeDiff%60)
    console.log(`${min.toString().padStart(2,"0")}:${sec.toString().padStart(2,"0")}`);

    
}),1000)
}countDownTimer(inPut)

