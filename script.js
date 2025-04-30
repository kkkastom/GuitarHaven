document.addEventListener('DOMContentLoaded', function() {
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const formsContainer = document.querySelector('.form-side');

    function switchForms(hideForm, showForm) {

        hideForm.style.transform = 'rotateY(-90deg)';
        hideForm.style.opacity = '0';
        

        setTimeout(() => {
            hideForm.classList.remove('visible-form');
            hideForm.classList.add('hidden-form');
            
            showForm.classList.remove('hidden-form');
            showForm.classList.add('visible-form');
            

            setTimeout(() => {
                showForm.style.transform = 'rotateY(0deg)';
                showForm.style.opacity = '1';
            }, 10);
        }, 300);
    }

    function switchToLogin() {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        switchForms(registerForm, loginForm);
    }
    
    function switchToRegister() {
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        switchForms(loginForm, registerForm);
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