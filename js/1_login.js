// 1_login.js
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

function showModal(title, body){
  modalTitle.textContent = title;
  modalBody.textContent = body;
  modal.style.display = 'flex';
}
closeModal.onclick = ()=> modal.style.display = 'none';

document.getElementById('forgotBtn').onclick = ()=> showModal('Lupa Password', 'Silakan hubungi admin@bookstore.test untuk reset password.');
document.getElementById('registerBtn').onclick = ()=> showModal('Daftar', 'Form pendaftaran sementara tidak aktif.');

document.getElementById('loginBtn').onclick = ()=>{
  const email = document.getElementById('email').value.trim();
  const pass = document.getElementById('password').value.trim();
  if(!email || !pass){ alert('Email/password harus diisi'); return; }
  if(email === credentials.email && pass === credentials.password){
    // success -> redirect ke dashboard
    window.location.href = '3_dashboard.html';
  } else {
    alert('email/password yang anda masukkan salah');
  }
}