


// Check if logged-in user is admin
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (!loggedInUser || loggedInUser.role !== 'admin') {
  alert('Access denied. Admins only.');
  window.location.href = 'login.html'; // Or wherever your login page is
}

// Set welcome message
document.getElementById('welcomeMessage').textContent = `Welcome, ${loggedInUser.username} (Admin)`;

// Fetch all users from localStorage
const users = JSON.parse(localStorage.getItem('users')) || [];

// restrict Admins
const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (currentUser.role === 'admin') {
  alert('Admins cannot create blog posts.');
  return;
}


// Render users in DOM
const userListContainer = document.getElementById('userList');

if (users.length === 0) {
  userListContainer.innerHTML = '<p>No registered users.</p>';
} else {
  users.forEach(user => {
    const userCard = document.createElement('div');
    userCard.className = 'user-card';
    userCard.innerHTML = `
      <strong>Username:</strong> ${user.username}<br>
      <strong>Role:</strong> ${user.role}
    `;
    userListContainer.appendChild(userCard);
  });
}
