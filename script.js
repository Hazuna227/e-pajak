// Menambahkan kredensial pengguna untuk login
const users = [
    {
        username: "admin",
        password: "admin123"
    },
    {
        username: "user",
        password: "user123"
    }
];

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Ambil input dari form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Cek apakah kredensial cocok dengan salah satu akun di "users"
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Jika login berhasil
        alert("Login berhasil!");
        window.location.href = "dashboard.html"; // Halaman tujuan setelah login berhasil
    } else {
        // Jika login gagal
        document.getElementById('error-message').style.display = "block";
    }
});
