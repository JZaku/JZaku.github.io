var frmvalidator = new Validator("contactform");
frmvalidator.addValidation("name","req","Please provide your name");
frmvalidator.addValidation("emailaddress","req","Please enter a valid email address");
frmvalidator.addValidation("message","req","Please provide your email");