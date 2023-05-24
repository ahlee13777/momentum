const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock,1000); //(함수,interval(ms)) 반복실행
//setTimeout(say,Hello, 5000) //1번실행

//1의자리 단위 수정해야됨