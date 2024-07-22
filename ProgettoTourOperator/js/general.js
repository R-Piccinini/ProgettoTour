async function login(event) {
    event.preventDefault();
    const username = document.getElementById('usernameLogin').value;
    const password = document.getElementById('passwordLogin').value;
    const messageElement = document.getElementById('message');

    try {
        console.log("OK");
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
            localStorage.setItem('authToken', token);
            messageElement.textContent = 'Login successful';
            messageElement.style.color = 'green';
            //TODO: redirect sul profilo utente
        } else {
            messageElement.textContent = 'Invalid credentials';
            messageElement.style.color = 'red';
        }
    } catch (error) {
        console.error('Error during login:', error);
        messageElement.textContent = 'Error during login';
        messageElement.style.color = 'red';
    }

    
}

async function logout(event) {
    event.preventDefault();
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