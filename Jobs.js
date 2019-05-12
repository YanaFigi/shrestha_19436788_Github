function checkForm(f){
if(f.First.value==""){
	alert("Please enter your First Name");
	return false;
}
if (f.Last.value=="") {
	alert("PLease enter your Last Name");
	return false;
}
if (f.Contact.value=="") {
	alert("Please enter your Contact Number");
	return false;
}
if (f.Email.value==""){
	alert("Please enter your Email");
	return false;
}
if (f.Birthday.value==""){
	alert("Please enter your Birthday");
	return false;
}
if (f.Gender.value==""){
	alert("Please pick a Gender");
	return false;
}
if (f.Salary.value==""){
	alert("Please type your expected salary");
	return false;
}
}