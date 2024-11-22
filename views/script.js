const fileInput = document.getElementById('file');
const fileNameSpan = document.querySelector('.file-name');

fileInput.addEventListener('change', () => {
  if (fileInput.files.length > 0) {
    fileNameSpan.textContent = fileInput.files[0].name;
  } else {
    fileNameSpan.textContent = 'No file chosen';
  }
});
