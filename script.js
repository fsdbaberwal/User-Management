function addUser() {
    const userId = document.getElementById('userId').value;
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userAge = document.getElementById('userAge').value;

    if (userId && userName && userEmail && userAge) {
        const user = { id: userId, name: userName, email: userEmail, age: userAge };
        localStorage.setItem(userId, JSON.stringify(user));
        alert('User added successfully!');
        clearFields();
    } else {
        alert('Please fill all fields');
    }
}

function updateUser() {
    const userId = document.getElementById('userId').value;
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userAge = document.getElementById('userAge').value;

    if (userId && userName && userEmail && userAge) {
        if (localStorage.getItem(userId)) {
            const user = { id: userId, name: userName, email: userEmail, age: userAge };
            localStorage.setItem(userId, JSON.stringify(user));
            alert('User updated successfully!');
            clearFields();
        } else {
            alert('User not found');
        }
    } else {
        alert('Please fill all fields');
    }
}

function deleteUser() {
    const userId = document.getElementById('userId').value;

    if (userId) {
        if (localStorage.getItem(userId)) {
            localStorage.removeItem(userId);
            alert('User deleted successfully!');
            clearFields();
        } else {
            alert('User not found');
        }
    } else {
        alert('Please enter User ID');
    }
}

function searchUser() {
    const userId = document.getElementById('userId').value;

    if (userId) {
        const user = localStorage.getItem(userId);
        if (user) {
            displayUserDetails(JSON.parse(user));
        } else {
            alert('User not found');
        }
    } else {
        alert('Please enter User ID');
    }
}

function showAllUsers() {
    const userDetailsDiv = document.getElementById('userDetails');
    userDetailsDiv.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const user = JSON.parse(localStorage.getItem(key));
        userDetailsDiv.innerHTML += `
            <p><strong>ID:</strong> ${user.id}</p>
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Age:</strong> ${user.age}</p>
            <hr>
        `;
    }
}

function displayUserDetails(user) {
    const userDetailsDiv = document.getElementById('userDetails');
    userDetailsDiv.innerHTML = `
        <p><strong>ID:</strong> ${user.id}</p>
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Age:</strong> ${user.age}</p>
    `;
}

function clearFields() {
    document.getElementById('userId').value = '';
    document.getElementById('userName').value = '';
    document.getElementById('userEmail').value = '';
    document.getElementById('userAge').value = '';
}