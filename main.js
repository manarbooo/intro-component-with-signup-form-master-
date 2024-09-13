const form = document.querySelector("#form");
const inputs = document.querySelectorAll(".formInput");



form.addEventListener('submit', (e)=>{
  e.preventDefault();

  let allValid = true;
  inputs.forEach((input, index)=>{
    const errorIcon = document.querySelector(`.iconErr${index + 1}`);
    const errorMessage = document.querySelector(`.errorMsg${index + 1}`);

    if(input.value.trim() === ""){
        errorMessage.style.visibility = "visible";
        errorIcon.style.visibility = "visible";
        input.style.borderColor = 'var(--Red)';
    }else{
        errorMessage.style.visibility = "hidden";
        errorIcon.style.visibility = "hidden";
        input.style.borderColor = 'var(--Green)';
    }

    if(input.name === "email"){
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(input.value)){
            errorMessage.textContent = "Looks like this is not an email";
            errorMessage.style.visibility = "visible";
            errorIcon.style.visibility = "visible";
            allValid = false;
        }
    }

    if(input.name === "password"){
        if(input.value.length < 6){
            errorMessage.textContent = "Password must be at least 6 characters";
            errorMessage.style.visibility = "visible";
            errorIcon.style.visibility = "visible";
            allValid = false;
        }
    }
  });

  if(allValid){
    alert("Form submitted successfully!");
    location.reload();
  }
})