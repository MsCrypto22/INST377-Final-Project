function validate () {
    const validationRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(validationRegex.test(document.contactForm.message.value)) {
        alert('You cannot input anything with special characters!')
        return false

 } 
    alert("Your form has been submitted!")
    return true;
    
}