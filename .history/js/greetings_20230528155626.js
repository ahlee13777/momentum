const loginForm = document.querySelector("#login-form"); //#오르 id임을 명시해야함, getElementByID("login-form")과 동일 
const loginInput = loginForm.querySelector("input"); //.으로 class 찾기
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //string만 담은 변수는 대문자로
const USERNAME_KEY = "username";

/*
위에 세줄을 아래 두 줄로 할 수 있음
const loginInput = document.querySelector("#login-form input");
const loginButton ...
*/

//const link = document.querySelector("a");

/**
 * Login handler
 * 
 * 로그인을 하세여.
 * @param {*} event 
 */
function onLoginSubmit(event){ //이벤트핸들러, 첫번째 매개변수에서 event에 대한 정보를 전달함
    
    event.preventDefault(); //디폴트를 막는 함수, form을 submit하면 새고하는걸 막음, 클릭 = 새로고침
    //라이브러리로는 이걸 할 수 있게 할 수 있음 

    loginForm.classList.add(HIDDEN_CLASSNAME); //입력되면 console에는 남지만 창에서 사라짐
    const username = loginInput.value; //입력된 값은 value에 저장됨 console.dir로 확인가능

    localStorage.setItem(USERNAME_KEY, username); //chrome-application에서 저장된거 확인가능
    //서버에쓰는게 안전, 구분해서 사용 / 공유해야하는 정보는 서버에
    paintGreetings(username);
    
    //console.log(loginInput.value); console창에서 입력값 확인가능

    /* html에서 form을 이용하지않고 그냥 div로 했을때는 이렇게 
    form 안에 input만들어서 서식 지정해주면 거기서 required로 예외처리 가능
    if (username === ""){
        alert("Please write your name");
    }
    else if (username.length > 15){
        alert("Your name is too long.");
    }
    */
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`; //"" ''아니고 ``
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

/*linkclick을 공부해보자
function handleLinkClick(event){ // Mouseevent(oLS함수는 Submitevnet)
    event.preventDefault(); //기본동작 막음
    console.log(event);
    alert("clicked!"); //ok를 눌러야 기본동작(창열기)이 실행 됨
}
link.addEventListener("click", handleLinkClick);
*/

/*
아래 if문으로 감
//loginButton.addEventListener("click", onLoginSubmit); 아래처럼 submit 사용
loginForm.addEventListener("submit", onLoginSubmit); // submit은 기본적으로 console새고됨 (preventDefault로 막을 수 잇음)
*/

const savedUsername = localStorage.getItem(USERNAME_KEY); 

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); //on이든 handle이든 통일 handleSave handleCancel 이런식으로 handle뒤에 intent넣기  
}
else {
    paintGreetings(savedUsername);
}