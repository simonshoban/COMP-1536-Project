var ck_email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
var ck_username = /^[A-Za-z0-9_]{5,20}$/;
var ck_password =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#?!@$*%^&-]).{5,20}$/;
var ck_dateofbirth = /[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/;

function validate(form){
	var email = form.email.value;
	var username = form.username.value;
	var password = form.password.value;
	var gender = document.getElementsByName("gender");
	var dateofbirth = form.dateOfBirth.value;
	var errors = [];

	if (!ck_email.test(email)) {
		errors[errors.length] = "You must enter a valid email address.";
		document.getElementById('valid_email').style.display = 'block';
		document.getElementById('invalid_email').style.display = 'inline';
	}
	else{
		document.getElementById('valid_email').style.display = 'none';
		document.getElementById('invalid_email').style.display = 'none';
	}

	if (!ck_dateofbirth.test(dateofbirth)) {
		errors[errors.length] = "You must enter a valid date of birth.";
		document.getElementById('valid_dob').style.display = 'block';
		document.getElementById('invalid_dob').style.display = 'inline';
	}
	else{
		document.getElementById('valid_dob').style.display = 'none';
		document.getElementById('invalid_dob').style.display = 'none';
	}

	if (!ck_username.test(username)) {
		errors[errors.length] = "Your username must be at least 5 characters long and contains no special characters.";
		document.getElementById('valid_user').style.display = 'block';
		document.getElementById('invalid_user').style.display = 'inline';
	}
	else{
		document.getElementById('valid_user').style.display = 'none';
		document.getElementById('invalid_user').style.display = 'none';
	}

	if (!ck_password.test(password)) {
		errors[errors.length] = "You must enter a valid Password ";
		document.getElementById('valid_password').style.display = 'block';
		document.getElementById('invalid_password').style.display = 'inline';
	}
	else{
		document.getElementById('valid_password').style.display = 'none';
		document.getElementById('invalid_password').style.display = 'none';
	}

	if (!gender[0].checked && !gender[1].checked && !gender[2].checked) {
		errors[errors.length] = "Select Gender";
		document.getElementById('valid_gender').style.display = 'block';
		document.getElementById('invalid_gender').style.display = 'inline';
	}
	else{
		document.getElementById('valid_gender').style.display = 'none';
		document.getElementById('invalid_gender').style.display = 'none';
	}

	if(!document.getElementById('terms_agree').checked){
		errors[errors.length] = "Agree to ToS";
		document.getElementById('valid_tos').style.display = 'block';
		document.getElementById('invalid_tos').style.display = 'inline';
	}
	else{
		document.getElementById('valid_tos').style.display = 'none'
		document.getElementById('invalid_tos').style.display = 'none';
	}

	if(document.getElementById('password').value != document.getElementById('confirm_password').value){
		errors[errors.length] = "Please make sure you entered the same passwords";
		document.getElementById('valid_confirm').style.display = 'block';
		document.getElementById('invalid_confirm').style.display = 'inline';
	}
	else{
		document.getElementById('valid_confirm').style.display = 'none';
		document.getElementById('invalid_confirm').style.display = 'none';
	}

	if (errors.length > 0) {
		return false;
	}
	else {
		return true;
	}
}
