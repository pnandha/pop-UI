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
  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})|^(\d{10})$/;

  return re.test(numb);
}

  function validateName(name) {
    var re = /^[A-Za-z]+ [A-Za-z]+$/;
    return re.test(name);
}



const categories = [{name: "Cards", id: 2}, {name: "Figures", id: 3}, {name: "Other", id: 4}]


export {validateEmail, validatePassword, validatePhoneNumber, validateName, categories}