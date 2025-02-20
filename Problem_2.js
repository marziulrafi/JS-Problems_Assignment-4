function validEmail(email) {
    if (typeof email !== 'string') {
        return "Invalid";
    }

    let firstChar = email.charAt(0);
    if (firstChar === '.' || firstChar === '-' || firstChar === '+' || firstChar === '@') {
        return false;
    }

    if (email.includes(" ")) {
        return false;
    }

    if (!email.endsWith(".com")) {
        return false;
    }

    return true;
}


let testMail = "kar im@gmail.com"
let test = validEmail(testMail)
console.log(test)