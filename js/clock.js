const clock = document.querySelector("h1#clock");



// var now = new Date(); // 시간을 가져옴
// var nowTime = now.getFullYear() + "년 " + (now.getMonth()+1) + "월" + now.getDate() + "일" + now.getHours() + "시" + now.getMinutes() + "분" + now.getSeconds() + "초";
// clock.innerHTML = nowTime; // 현재 시간을 innerHTML을 사용해서 ID가 clock 인곳에 넣음
// setTimeout("printTime()",1000);

function getClock(){
    const date = new Date();
    const hours = date.getHours().toString().padStart(2,"0");
    const minutes = date.getMinutes().toString().padStart(2,"0");
    const seconds = date.getSeconds().toString().padStart(2,"0");
    const now = `${hours}:${minutes}:${seconds}`;
    clock.innerText = now;

}
getClock()
setInterval(getClock, 1000);

