function nextpage(){   
    var username = document.getElementById("name").value; // Get input value
    // var show=document.getElementById("usnshow").innerHTML;

    if (username == "" ){
        alert('Please enter a name!');
        return false;
    } 
   
    // show = 'Welcome,' + username;  
    window.location.href = "mainpage.html";
    
}