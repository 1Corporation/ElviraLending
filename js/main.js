const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => { const open = nav.classList.toggle('is-open'); menuButton.setAttribute('aria-expanded', open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); }));
document.querySelectorAll('.faq-item button').forEach(button => button.addEventListener('click', () => { const item = button.closest('.faq-item'); const open = item.classList.toggle('is-open'); button.setAttribute('aria-expanded', open); }));
const modal = document.querySelector('.modal');
const form = modal.querySelector('form');
function toggleModal(open) { modal.classList.toggle('is-open', open); modal.setAttribute('aria-hidden', !open); document.body.classList.toggle('no-scroll', open); if (open) form.querySelector('input').focus(); }
document.querySelectorAll('.js-open-modal').forEach(button => button.addEventListener('click', () => toggleModal(true)));
modal.querySelector('.modal__close').addEventListener('click', () => toggleModal(false));
modal.querySelector('.modal__backdrop').addEventListener('click', () => toggleModal(false));
document.addEventListener('keydown', event => { if (event.key === 'Escape') toggleModal(false); });
form.addEventListener('submit', event => { event.preventDefault(); const message = form.querySelector('.form-message'); if (!form.checkValidity()) { form.classList.add('was-validated'); message.textContent = 'Заполните все обязательные поля.'; return; } message.textContent = 'Заявка успешно отправлена!'; form.classList.remove('was-validated'); form.reset(); });
