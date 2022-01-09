function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
   
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();


    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var Age=document.getElementById('ageTextBox').value;

Age = parseInt(Age, 10);
if (isNaN(Age) || Age < 1 || Age > 100)
{ 
  alert("The age must be a number between 1 and 100");
  return false;
}



        var dob = document.forms["ProcessInfo"]["dateofb"].value;
        var data = dob.split("/");
    
        if (isNaN(Date.parse(data[2] + "-" + data[1] + "-" + data[0]))) {
            return false;
        
    
        return true;
    }

    return returnval;
}

