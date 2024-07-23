async function login() {
    const username = document.getElementById('usernameLogin').value;
    const password = document.getElementById('passwordLogin').value;
    const messageElement = document.getElementById('message');

    try {
        console.log("OK" + username + "e OK " + password);
        const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.status === 200) {
            const data = await response.json();
            const token = data.token;
            window.localStorage.setItem('authToken', token);
            messageElement.textContent = 'Login successful';
            messageElement.style.color = 'green';
            window.location.href = "http://127.0.0.1:3000/ProgettoTourOperator/AreaPersonale.html";
        } else {
            messageElement.textContent = 'Invalid credentials';
            messageElement.style.color = 'red';
        }
    } catch (error) {
        console.error('Error during login:', error);
        messageElement.textContent = 'Error during login';
        messageElement.style.color = 'red';
    }

    const qualcosa = window.localStorage.getItem('authToken');
    console.log(qualcosa);
    
}

async function logout() {
    const token = localStorage.getItem('authToken');
    const messageElement = document.getElementById('message');

    try {
        const response = await fetch('http://localhost:8080/auth/logout', {
            method: 'POST',
            headers: {
                'Authorization': `${token}`
            }
        });

        if (response.status === 200) {
            localStorage.removeItem('authToken');
            messageElement.textContent = 'Logout successful';
            messageElement.style.color = 'green';
        } else {
            messageElement.textContent = 'Error during logout';
            messageElement.style.color = 'red';
        }
    } catch (error) {
        console.error('Error during logout:', error);
        messageElement.textContent = 'Error during logout';
        messageElement.style.color = 'red';
    }
}