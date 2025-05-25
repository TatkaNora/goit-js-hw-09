const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

/* ----- init from storage ----- */
const saved = localStorage.getItem(STORAGE_KEY);
if (saved) {
  try {
    formData = JSON.parse(saved);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  } catch (_) {
    // broken JSON – ignore
  }
}

/* ----- input handler ----- */
form.addEventListener('input', () => {
  formData.email = form.email.value.trim();
  formData.message = form.message.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

/* ----- submit handler ----- */
form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  // clear everything
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
