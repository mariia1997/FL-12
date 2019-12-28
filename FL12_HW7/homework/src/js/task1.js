let email;
let password;
let newPassword1;
let newPassword2;
let oldPassword;
const emailLenhgt = 5;
const passwordLenhgt = 6;

email = prompt('Please, input your email', 'address@gmail.com');
if (email === '' || email === null){
	alert('Canceled.');
} else if (email.length < emailLenhgt) {
	alert("I don't know any emails having name length less than 5 symbols");
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
	password = prompt('Please, input your password', 'password');
	if (password === '' || password === null){
		alert('Canceled');
	} else if ((email !== 'user@gmail.com' || password !== 'UserPass') && 
		(email !== 'admin@gmail.com' || password !== 'AdminPass')) {
		alert('Wrong password');
	} else if (!confirm('Do you want to change your password?')) {		
		alert('You have failed your change.');
	} else {
		oldPassword = prompt('Please, input your old password', 'Your old password');
		if (email === 'user@gmail.com' && oldPassword !== 'UserPass') {
			alert('Wrong password');
		} else if (email === 'admin@gmail.com' && password !== 'AdminPass') {
			alert('Wrong password');
		} else {
			newPassword1 = prompt('Please, input your new password', 'Your new password');
			if(newPassword1 === '' || newPassword1 === null){
				alert('Canceled.')
			} else if (newPassword1.length < passwordLenhgt){
				alert('It’s too short password. Sorry.');
			} else {
				newPassword2 = prompt('Please, enter your new password again', 'Your new password');
				if (newPassword1 !== newPassword2){
					alert('You wrote the wrong password.');
				} else {
					alert('You have successfully changed your password');
				}
			}			
		}

	}
	
} else if (email !== 'user@gmail.com' || email !== 'admin@gmail.com'){
	alert("I don't know you");
}



