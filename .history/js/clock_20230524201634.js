const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date(); //js 내장 객체
    const hours = String(date.getHours()).padStart(2, "0"); //date 객체에서 매서드 사용 
    const minutes = String(date.getMinutes()).padStart(2, "0"); //padStart(최대길이, 채울거)
    const seconds = String(date.getSeconds()).padStart(2, "0");

    //clock.innerText = `${date.getHoursdate.getMinutes()}:${date.getSeconds()}`;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock,1000); //(함수,interval(ms)) 반복실행
//setTimeout(say,Hello, 5000) //1번만 실행



