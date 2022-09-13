let Loader = document.getElementById('loading');
let backtoTop = document.getElementById('back-to-top-btn');
window.addEventListener("load", function(){
    Loader.style.display = "none";
    backtoTop.style.display = "block";
})

const openSearch = () => {
    let div = document.getElementById('search-icon-hidden-div');
    div.style.top = "0px";
    div.style.left = "0px";
}

const closeSearch = () => {
    let div = document.getElementById('search-icon-hidden-div');
    div.style.top = "-100vh";
}

const joinNow = () =>{
    let name = document.getElementById('name').value;
    let email = document.getElementById('emailAddress').value;
    let gender = document.getElementById('gender').value;
    let age = document.getElementById('age').value;
    let city = document.getElementById('city').value;
    let phone = document.getElementById('phone').value;

    if (name === "" || email === "" || gender === "" || age === "" || city === "" || phone === ""){
        swal('Operation Failed!', 'You Did Not Fill The Form Properly!','error');
    }
    else
    {
        swal('Congratulations!','You Are Now A Member Of GYM HUB!','success');
        document.getElementById('name').value = "";
        document.getElementById('emailAddress').value = "";
        document.getElementById('gender').value = "";
        document.getElementById('age').value = "";
        document.getElementById('city').value = "";
        document.getElementById('phone').value = "";
    }
}

const sendMessage = () => {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let emailAddress = document.getElementById("email-address").value;
    let message = document.getElementById('message').value;

    
    if (fname === "" || lname === "" || emailAddress === "" || message === "")
    {
        swal('Message Not Sent Successfully!', 'You Did Not Fill The Form Properly!','error');
    }
    else
    {
        swal('Message Sent Successfully!','Your Message has been Sent!','success');
        document.getElementById('fname').value = "";
        document.getElementById('lname').value = "";
        document.getElementById('email-address').value = "";
        document.getElementById('message').value = "";
    }
}