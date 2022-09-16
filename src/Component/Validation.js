const validation=(values)=>{
   // function validation(values){
let errors={};

if(!values.fname){
    errors.fname="Name is required"
}
if(!values.lname){
    errors.lname="last name is required"
}
if(!values.email){
    errors.email="email is required"
}/*else if(!/\$+@\$+\.$+/.test(values.email)){
    errors.email="email is invalid"
}*/
if(values.password){
    errors.password="password is required"
} else if(values.password.length < 5){
    errors.password="passwords must be more than five charactor"
}

return errors;

};
export default validation;