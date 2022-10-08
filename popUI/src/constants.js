function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

function validatePassword(pw) {
    return /[A-Z]/       .test(pw) &&
           /[a-z]/       .test(pw) &&
           /[0-9]/       .test(pw) &&
           pw.length > 6;

}

function validatePhoneNumber(numb) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  
    return re.test(numb);
  }

  function validateName(name){
    var re = /^[a-zA-Z]+ [a-zA-Z]+$/;
    return re.test(name);
}

export {validateEmail, validatePassword, validatePhoneNumber, validateName}