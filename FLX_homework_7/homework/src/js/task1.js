let userLogin = prompt('Enter your login', '');
if (userLogin === '' || userLogin === null) {
    alert('Canceled.');
} else if (userLogin.length < 4) {
    alert("I don't know any users having name length less than 4 symbols");
} else if (userLogin === 'User' || userLogin === 'Admin') {
    let userPassword = prompt('Enter your password');   
        if (userPassword === '' || userPassword === null) {
            alert('Canceled.');
        } else if (userLogin === 'User' && userPassword === 'UserPass') {
            new Date().getHours() < 20;
            alert('Good day, dear User!');
        } else if (userLogin === 'User' && userPassword === 'UserPass') {
            new Date().getHours() > 20;
            alert('Good evening, dear User!');
        } else if (userLogin === 'Admin' && userPassword === 'RootPass') {
            new Date().getHours() < 20;
            alert('Good day, dear Admin!');
        } else if (userLogin === 'Admin' && userPassword === 'RootPass') {
            new Date().getHours() > 20;
            alert('Good evening, dear Admin!');
        } else {
            alert('Wrong password');
        }
} else {
    alert("I don’t know you");
}


