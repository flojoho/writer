
const wordCount = document.getElementById('word-count');
const textArea = document.getElementById('text-area');

textArea.addEventListener('input', e => {
  const count = e.target.value.trim().split(/\s+/).length;
  wordCount.innerText = count;
});