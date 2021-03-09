const message= 'NodeJS is awesome'
console.log(message);

const validateEmails = email=>{
    return validator.isEmail(email)
}

const validator = require('validator')

console.log('Is mango@gmail.com a valid email?', validateEmails('mango@gmail.com'))
console.log('Is mangogmail.com a valid email?', validateEmails('mangogmail.com'))
