document.getElementById('loginForm').addEventListener('submit',function (event) 
{
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if(username ==='admin' && password === 'password')
    {
        alert('Login Successful');
        window.location.href = 'home.html';
    }
    else
    {
        alert('Invalid username or password')
    }
});

