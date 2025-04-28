document.addEventListener('DOMContentLoaded', function() {
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    function switchToLogin() {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginForm.classList.remove('hidden-form');
        loginForm.classList.add('visible-form');
        registerForm.classList.remove('visible-form');
        registerForm.classList.add('hidden-form');
    }
    
    function switchToRegister() {
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        registerForm.classList.remove('hidden-form');
        registerForm.classList.add('visible-form');
        loginForm.classList.remove('visible-form');
        loginForm.classList.add('hidden-form');
    }
    
    loginTab.addEventListener('click', switchToLogin);
    registerTab.addEventListener('click', switchToRegister);
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('У нас нет серверной части, поэтому сделаем вид, что вы вошли :)');
    });
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('У нас нет серверной части, поэтому сделаем вид, что мы вас зарегали :)');
    });
});