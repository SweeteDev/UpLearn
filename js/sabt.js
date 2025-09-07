const formTitle = document.querySelector(".form-title");
const headerButtons = document.querySelectorAll(".header-btn");
const loginButton = document.querySelector(".login-btn");
const registerButton = document.querySelector(".register-btn");
const navigateLinks = document.querySelectorAll(".navigate-link");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");
const eyeButtons = document.querySelectorAll(".eye-btn");
const alertText = document.querySelectorAll(".alert-text");

//login elements
const loginEmailInput = document.getElementById("login-email-input");
const loginEmailAlert = document.getElementById("login-email-alert");
const loginPassowrdInput = document.getElementById("login-password-input");
const loginPasswordAlert = document.getElementById("login-password-alert");

//register elements
const registerEmailInput = document.getElementById("register-email-input");
const registerEmailAlert = document.getElementById("register-email-alert");
const registerPasswordInput = document.getElementById(
  "register-password-input"
);
const registerPasswordAlert = document.getElementById(
  "register-password-alert"
);
const registerConfirmPasswordInput = document.getElementById(
  "register-confirm-password-input"
);
const registerConfirmPasswordAlert = document.getElementById(
  "register-confirm-password-alert"
);

//TOGGLE FORMS
navigateLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const dataLink = link.dataset.link;
    if (dataLink === "login") {
      loginButton.click();
    } else if (dataLink === "register") {
      registerButton.click();
    }
  });
});

//SHOW LOGIN FORM
loginButton.addEventListener("click", () => {
  formTitle.innerHTML = "فرم ورود";

  registerForm.classList.remove("active");
  loginForm.classList.add("active");

  registerButton.classList.remove("active");
  loginButton.classList.add("active");
});

// SHOW REGISTER FORM
registerButton.addEventListener("click", () => {
  formTitle.innerHTML = "فرم ثبت نام";

  registerForm.classList.add("active");
  loginForm.classList.remove("active");

  registerButton.classList.add("active");
  loginButton.classList.remove("active");
});

//SHOW OR HIDE PASSWORD
eyeButtons.forEach((eye) => {
  eye.addEventListener("click", () => {
    const input = eye.previousElementSibling;

    if (input.type === "password") {
      input.type = "text";
      eye.firstElementChild.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      input.type = "password";
      eye.firstElementChild.classList.replace("fa-eye-slash", "fa-eye");
    }
  });
});

//VALIDATE LOGIN FORM
loginForm.addEventListener("click", (e) => {
  if (!validateLoginForm()) {
    e.preventDefault();
  }
});

//VALIDATE LOGIN EMAIL
loginEmailInput.addEventListener("input", () => {
  const emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!loginEmailInput.value.match(emailFormat)) {
    loginEmailInput.classList.add("wrong-input");
    loginEmailAlert.innerText = " ایمیل را صحیح وارد کنید";
  } else {
    loginEmailInput.classList.remove("wrong-input");
    loginEmailAlert.innerText = "";
  }
});

//VALIDATE LOGIN PASSWORD
loginPassowrdInput.addEventListener("input", () => {
  if (loginPassowrdInput.value.length < 6) {
    loginPassowrdInput.classList.add("wrong-input");
    loginPasswordAlert.innerText = " بیشتر از 6 کاراکتر وارد کنید";
  } else {
    loginPassowrdInput.classList.remove("wrong-input");
    loginPasswordAlert.innerText = "";
  }
});
const validateLoginForm = () => {
  // email validation
  const emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!loginEmailInput.value.match(emailFormat)) {
    loginEmailInput.classList.add("wrong-input");
    loginEmailAlert.innerText = " ایمیل را صحیح وارد کنید";
    return false;
  }

  // password validation
  if (loginPasswordInput.value.length < 6) {
    loginPasswordInput.classList.add("wrong-input");
    loginPasswordAlert.innerText = " بیشتر از 6 کاراکتر وارد کنید";
    return false;
  }

  return true; // if inputs was correct
};

// VALIDATE REGISTER FORM
registerForm.addEventListener("submit", (e) => {
  if (!validateRegisterForm()) {
    e.preventDefault();
  }
});

// validate register email
registerEmailInput.addEventListener("input", () => {
  const emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!registerEmailInput.value.match(emailFormat)) {
    registerEmailInput.classList.add("wrong-input");
    registerEmailAlert.innerText = " ایمیل را صحیح وارد کنید";
  } else {
    registerEmailInput.classList.remove("wrong-input");
    registerEmailAlert.innerText = "";
  }
});

// validate register password
registerPasswordInput.addEventListener("input", () => {
  if (registerPasswordInput.value.length < 6) {
    registerPasswordInput.classList.add("wrong-input");
    registerPasswordAlert.innerText = " بیشتر از 6 کاراکتر وارد کنید";
  } else {
    registerPasswordInput.classList.remove("wrong-input");
    registerPasswordAlert.innerText = "";
  }
});

// validate register confirm password
registerConfirmPasswordInput.addEventListener("input", () => {
  if (registerConfirmPasswordInput.value.length < 6) {
    registerConfirmPasswordInput.classList.add("wrong-input");
    registerConfirmPasswordAlert.innerText = " بیشتر از 6 کاراکتر وارد کنید";
  } else if (
    registerConfirmPasswordInput.value !== registerPasswordInput.value
  ) {
    registerConfirmPasswordInput.classList.add("wrong-input");
    registerConfirmPasswordAlert.innerText = "کلمات عبور یکسان نیست";
  } else {
    registerConfirmPasswordInput.classList.remove("wrong-input");
    registerConfirmPasswordAlert.innerText = "";
  }
});
// validate register form
const validateRegisterForm = () => {
  // validate email
  const emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!registerEmailInput.value.match(emailFormat)) {
    registerEmailInput.classList.add("wrong-input");
    registerEmailAlert.innerText = " ایمیل را صحیح وارد کنید";
    return false;
  }

  // validate password
  if (registerPasswordInput.value.length < 6) {
    registerPasswordInput.classList.add("wrong-input");
    registerPasswordAlert.innerText = " بیشتر از 6 کاراکتر وارد کنید";
    return false;
  }

  // validate confirm password
  if (registerConfirmPasswordInput.value.length < 6) {
    registerConfirmPasswordInput.classList.add("wrong-input");
    registerConfirmPasswordAlert.innerText = " بیشتر از 6 کاراکتر وارد کنید";
    return false;
  } else if (
    registerConfirmPasswordInput.value !== registerPasswordInput.value
  ) {
    registerConfirmPasswordInput.classList.add("wrong-input");
    registerConfirmPasswordAlert.innerText = "کلمات عبور یکسان نیست";
    return false;
  }

  return true; // if inputs was correct
};

//RESET FORM ALERT WHEN SWITCH TO ANOTHER FORMS
headerButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alertText.forEach((alert) => {
      alert.innerText = "";
      loginEmailInput.classList.remove("wrong-input");
      loginPassowrdInput.classList.remove("wrong-input");
      registerEmailInput.classList.remove("wrong-input");
      registerPasswordInput.classList.remove("wrong-input");
    });
  });
});
