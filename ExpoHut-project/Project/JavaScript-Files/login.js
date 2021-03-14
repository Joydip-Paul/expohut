const loginButton = document.getElementById("loginBtn");
loginButton.addEventListener("click", () => {
  const loginEmail = document.getElementById("loginemail").value;
  const loginPassword = document.getElementById("loginpassword").value;

  const loginObj = {
    loginEmail: loginEmail,
    loginPassword: loginPassword,
  };
  localStorage.setItem("loginObj", JSON.stringify(loginObj));

  let getLogin = localStorage.getItem("loginObj");
  let getL = ("getLogin", JSON.parse(getLogin));
  console.log(getL.loginEmail, getL.loginPassword);

  let getSignUp = localStorage.getItem("signupObj");
  let getS = ("getSignUp", JSON.parse(getSignUp));
  console.log(getS.userEmail, getS.userPassword);

  if (
    getL.loginEmail === getS.userEmail &&
    getL.loginPassword === getS.userPassword
  ) {
    // alert("ok")
    // const modal = document.getElementById('loginModal');
    // modal.style.display = "block";
    const modal = document.getElementById("mod-con");
    modal.innerHTML = `
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title mod-title" id="exampleModalLabel">Login Successful</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h3 class="mod-title">Would You Like To Go To Your Profile?</h3>
                </div>
                <div class="modal-footer">
                <a href="./profile.html">
                    <button type="button" class="btn btn-primary">Go</button>
                </a>
                </div>
            </div>
            </div>
        </div>
            `;
  } else {
    alert("Sorry!");
  }
});
