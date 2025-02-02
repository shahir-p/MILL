// login




function loginCheck() {
    var userName = document.getElementById('username');
    var password = document.getElementById('password');

    if(userName.value && password.value){
       if(userName.value=="BAVAMILL" && password.value==1234){
            
            window.location.href = 'pages/homePage.html';
       }else{
        err.innerHTML=`username and password are not match`
        // alert('username and password are not match')
       }
        

    }else{
        // alert("check the fields,Enter input")
         err.innerHTML=`check the fields,Enter input`
    }



}