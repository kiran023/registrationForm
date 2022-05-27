
const firebaseConfig = {
    apiKey: "AIzaSyBKBKU-EVp5hYxM4lEZyKYXmimTmAAQwEY",
    authDomain: "registrationform2022.firebaseapp.com",
    databaseURL: "https://registrationform2022-default-rtdb.firebaseio.com",
    projectId: "registrationform2022",
    storageBucket: "registrationform2022.appspot.com",
    messagingSenderId: "616752672624",
    appId: "1:616752672624:web:e59e0e40adae67d9d4a9b5",
    measurementId: "G-T0D9WB9TRF"
  };


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var regFormDB = firebase.database().ref("registrationForm");

document.getElementById("form-detail").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var scholar = getElementVal("scholar");
  var branch = getElementVal("branch");
  var phone = getElementVal("phone");
  var email = getElementVal("email");
  var verticle = getElementVal("verticle");

  console.log(name, scholar, branch, phone, email, verticle);
  saveMessages(name, scholar, branch, phone, email, verticle);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 5000);

  //   reset the form
  document.getElementById("form-detail").reset();
}

const saveMessages = (name, scholar, branch, phone, email, verticle) => {
  var newregForm = regFormDB.push();

  newregForm.set({
    name: name,
    scholar: scholar,
    branch: branch,
    phone: phone,
    email: email,
    verticle: verticle
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};