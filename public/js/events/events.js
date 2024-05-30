window.addEventListener("load",() => {
    const inputPass = document.querySelector("#password");
    const btnEye = document.querySelector("#btn-eye");
    const iconEye = document.querySelector("#icon-eye");

    btnEye.addEventListener("click", () => {
        isActive = iconEye.classList.contains("fa-eye-slash");

        if(isActive){
            inputPass.type = "password";	
        } else {
            inputPass.type = "text";
        }
        iconEye.classList.toggle("fa-eye-slash");
        iconEye.classList.toggle("fa-eye");
    })
})
