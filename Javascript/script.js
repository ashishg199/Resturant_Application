const login = document.getElementById('login-btn')
const btn2 = document.getElementById('btn2')
const shadow = document.getElementById('shadow')
const cut = document.getElementById('cut')
const cut1 = document.getElementById('cut1')
let login_form = document.querySelector('.login')
let signup_form = document.querySelector('.signup')
//--------------------------------------------
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom");


login.addEventListener("click", shadow_toggle)
btn2.addEventListener("click", shadow_toggle)


function shadow_toggle() {
    shadow.classList.toggle('shadow')
    document.body.classList.toggle('stop_scrolling')
}

document.querySelector('#login-btn').onclick = () => {
    login_form.classList.toggle('active')

}

document.querySelector('#cut').onclick = () => {
    login_form.classList.toggle('active')
    shadow_toggle()
}


document.querySelector('#btn2').onclick = () => {
    signup_form.classList.toggle('active')

}

document.querySelector('#cut1').onclick = () => {
    signup_form.classList.toggle('active')
    shadow_toggle()
}
//----------------------------------------------------

document.querySelector('.signup2').onclick = () => {
    login_form.classList.toggle('active')
    signup_form.classList.toggle('active')

}

document.querySelector('.login2').onclick = () => {
    signup_form.classList.toggle('active')
    login_form.classList.toggle('active')

}

//------------------------------------------------------




// inputBox.onkeyup = (e) => {
//     let userData = e.target.value;
//     let emptyArray = [];
//     if (userData) {
//         emptyArray = suggestions.filter((data) => {
//             return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
//         });
//         emptyArray = emptyArray.map((data) => {
//             return data = `<li>${data}</li>`;
//         });
//         searchWrapper.classList.add("active");
//         showSuggestions(emptyArray);
//         let allList = suggBox.querySelectorAll("li");
//         for (let i = 0; i < allList.length; i++) {
//             allList[i].setAttribute("onclick", "select(this)");
//         }
//     } else {
//         searchWrapper.classList.remove("active");
//     }
// }

// function select(element) {
//     let selectData = element.textContent;
//     inputBox.value = selectData;
//     searchWrapper.classList.remove("active");
// }

// function showSuggestions(list) {
//     let listData;
//     if (!list.length) {
//         userValue = inputBox.value;
//         listData = `<li>${userValue}</li>`;
//     } else {
//         listData = list.join('');
//     }
//     suggBox.innerHTML = listData;
// }