const form = document.querySelector('form');
const saveBtn = document.getElementById('saveBtn');




form.addEventListener('input', function (event) {
    event.preventDefault();

    if (form.checkValidity()) {
        if (passwordMatch()) {
            saveBtn.removeAttribute('disabled');
        }
    } else {
        saveBtn.setAttribute("disabled", "");
        console.log('Form is not valid');
    }
});



function saveBtnForm() {
    form.submit();
    console.log(form);
    console.log("gorm gönderildi");
}






let nameInput = document.getElementById("input-1");
let emailInput = document.getElementById("input-2");
let passwordInput = document.getElementById("input-3");
let repasswordInput = document.getElementById("input-4");

nameInput.onkeyup = nameInputCheck;
emailInput.onkeyup = emailInputCheck;
passwordInput.onkeyup = passwordInputCheck;
repasswordInput.onkeyup = repasswordInputCheck;


function nameInputCheck(e) {
    let InputId = e.target.id;
    let id = InputId.split("-")[1];
    let bElement = document.getElementById("b-" + id);
    let isvalid = e.target.validity.valid;

    console.log(isvalid);

    if (isvalid == true) {
        bElement.innerHTML = "";
        bElement.className = "";
    }
    else {
        bElement.innerHTML = " * " + e.target.validationMessage;
        bElement.className = "bg-theme-1";
    }


};

function emailInputCheck(e) {
    let InputId = e.target.id;
    let id = InputId.split("-")[1];
    let bElement = document.getElementById("b-" + id);

    let isvalid = e.target.validity.valid;
    console.log(isvalid);

    if (isvalid == true) {
        bElement.innerHTML = "";
        bElement.className = "";
    }
    else {
        bElement.innerHTML = " * " + e.target.validationMessage;
        bElement.className = "bg-theme-1";
    }

}



function passwordInputCheck(e) {

    let isvalid = e.target.validity.valid;
    let passwordInput = e.target;
    let repassword = document.getElementById("box-4");
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])[A-Za-z\d!@#$%^&*()\-_=+{};:,<.>]{5,}$/;
  
    var lowercaseRegex = /[a-z]/;
    var uppercaseRegex = /[A-Z]/;
    var digitRegex = /\d/;
    var specialCharRegex = /[!@#$%^&*()\-_=+{};:,<.>]/;
    let password = passwordInput.value;
  
    let boldEl0 = document.getElementById("be-0");
    let boldEl1 = document.getElementById("be-1");
    let boldEl2 = document.getElementById("be-2");
    let boldEl3 = document.getElementById("be-3");
    let boldEl4 = document.getElementById("be-4");
    let errDiv = document.getElementById("errDiv");


    boldEl0.classList.add("error-message");
    boldEl1.classList.add("error-message");
    boldEl2.classList.add("error-message");
    boldEl3.classList.add("error-message");
    boldEl4.classList.add("error-message");
  
    if (isvalid && passwordPattern.test(password)) {
      errDiv.style.display = "none";
      repassword.style.display = "block";
    } else {
      if (password.length > passwordInput.minLength) {
        boldEl0.classList.remove("error-message");
      }
      if (lowercaseRegex.test(password)) {
        boldEl1.classList.remove("error-message");
      }
      if (uppercaseRegex.test(password)) {
        boldEl2.classList.remove("error-message");
      }
      if (digitRegex.test(password)) {
        boldEl3.classList.remove("error-message");
      }
      if (specialCharRegex.test(password)) {
        boldEl4.classList.remove("error-message");
      }
      
      errDiv.style.display = "block";
      repassword.style.display = "none";
      //parola değişirse repassword silinmeli *b-4 sil
      let bElement = document.getElementById("b-4");
      bElement.innerHTML = "";
      bElement.className = "";
    }


  }
  


function repasswordInputCheck(event) {

    let InputId = event.target.id;
    let id = InputId.split("-")[1];
    let bElement = document.getElementById("b-" + id);

    //passwordInput yukarda tanımlı..!
    let password = passwordInput.value;
    let repassword = event.target.value;

    if (password == repassword) {
        bElement.innerHTML = "";
        bElement.className = "";
    }
    else {
        bElement.innerHTML = "*Parolalar uyuşmuyor" + "<br>" + event.target.validationMessage;
        bElement.className = "bg-theme-1";
    }


}

function passwordMatch() {
    if (passwordInput.value == repasswordInput.value) {
        return true;
    } else {
        return false;
    }
}


function hideShow() {

  var hideIcon=document.getElementById("hideIcon");
  console.log(hideIcon)
  let type= passwordInput.type;
  console.log(type);

  hideIcon.className="";

  if (type === "text") {
    passwordInput.type = "password";
    hideIcon.className = 'fa-solid fa-eye-slash ';
    
  } else {
    passwordInput.type = "text";
    hideIcon.className = 'fa-solid fa-eye text-theme';

  }
  }
  function hideShowRePassword() {

 
    var hideIcon=document.getElementById("hideIcon-2");
    console.log(hideIcon)
    let type= repasswordInput.type;
    console.log(type);
  
    hideIcon.className="";
  
    if (type === "text") {
      repasswordInput.type = "password";
      hideIcon.className = 'fa-solid fa-eye-slash ';
      
    } else {
      repasswordInput.type = "text";
      hideIcon.className = 'fa-solid fa-eye text-theme';
    }
    }






    // regex  Büyük harf / küçük harf duyarlı yapalım
    // En az 8 karakter içermeli ({8,})
    // En az bir küçük harf içermeli ((?=.*[a-z]))
    // En az bir büyük harf içermeli ((?=.*[A-Z]))
    // En az bir rakam içermeli ((?=.*\d))
    // En az bir özel karakter içermeli ((?=.*[!@#$%^&*()\-\_=+{};:,<.>]))

    //daha detaylı bir hata mesajı yazalım 
    // let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])[A-Za-z\d!@#$%^&*()\-_=+{};:,<.>]{5,}$/;
    // console.log("REGE", passwordPattern.test(passwordInput.value));

    //detaylı min ve maz değerlerinede bakalım 
    //passwordInput.maxLength



// function validateAndSubmit(event) {
//     event.preventDefault(); // Formun otomatik gönderilmesini engelle

//     let inputElement = document.getElementById("myInput");

//     if (/* Geçerlilik kontrolü */ true) {
//         inputElement.setCustomValidity(""); // Geçerli ise hata mesajını temizle
//     } else {
//         inputElement.setCustomValidity("Bu bir özel doğrulama hatası mesajıdır."); // Geçerli değilse hata mesajını ayarla
//         inputElement.reportValidity(); // Doğrulama mesajını göster
//     }
// }



//deneme

// function checkInputIsValid(event) {
//     let value = event.target.value;
//     let InputId = event.target.id;
//     let id = InputId.split("-")[1];
//     console.log(id);

//     let divElement = document.getElementById("box-" + id);
//     let isvalid = event.target.validity.valid;
//     let bElement = document.getElementById("b-" + id);

//     if (isvalid == true) {
//         bElement.remove();
//     }


//     else {
//         let err;

//         if (bElement != null) {
//             err.textContent = event.target.validationMessage;
//         }
//         else {
//             err = document.createElement("b");
//             err.id = "b-" + id;
//             err.textContent = event.target.validationMessage;
//             divElement.parentNode.insertBefore(err, divElement.nextSibling);
//         }

//     }

// }



// toplu input onkey atama
// for (let index in inputs) {
//     inputs[index].onkeyup = checkInputIsValid;

// divElement.parentNode.insertBefore(err, divElement.nextSibling);