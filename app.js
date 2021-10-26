const addForm = document.querySelector('.add');
const list = document.querySelector('.todolist');
const comItem = document.querySelector('.complete');


const generateListe = todo => {
  const html = `
  <li class="list-item"><i class="fas fa-clipboard-check complete"></i>
  <span>${todo}</span><i class="fas fa-trash-alt delete"></i></li>`;
  list.innerHTML += html;
};

list.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

list.addEventListener('click', e => {
  if (e.target.classList.contains("complete")) {
    (e.target.parentElement).style.textDecoration = 'line-through';
  }
});

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateListe(todo);
    addForm.reset();
  }
});
