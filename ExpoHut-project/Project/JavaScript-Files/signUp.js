const userName = document.getElementById("username").value;
const signUpButton = document.getElementById("signUp");
signUpButton.addEventListener("click", () => {
  const userName = document.getElementById("username").value;
  const userEmail = document.getElementById("email").value;
  const userNumber = document.getElementById("mobile").value;
  const userAddress = document.getElementById("address").value;
  const userPassword = document.getElementById("password").value;

  const signupObj = {
    userName: userName,
    userEmail: userEmail,
    userNumber: userNumber,
    userAddress: userAddress,
    userPassword: userPassword,
  };
  console.log(signupObj);
  localStorage.setItem('signupObj', JSON.stringify(signupObj));
//   const success = document.getElementById('signupDone');
//   success.style.display = "block";
});
