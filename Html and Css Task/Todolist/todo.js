const todo = document.forms.todo;

todo.addEventListener('submit', addTask);

function addTask(e) {
  e.preventDefault();
  const IO = this.elements;
  const data = IO.task.value;
  const list = document.querySelector('ol');
  const item = document.createElement('li');
  const text = document.createElement('p');
  text.textContent = data;
  IO.task.value = "";
  item.append(text);
  list.append(item);

  const dumpBtn = document.createElement('button')
  dumpBtn.textContent = "Delete";
  dumpBtn.type = 'button';
  item.append(dumpBtn);
  dumpBtn.addEventListener('click', dumpTask)

  const editBtn = document.createElement('button');
  editBtn.textContent = "Edit";
  editBtn.type = 'button';
  item.append(editBtn);
  editBtn.addEventListener('click', editTask);

  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save';
  saveBtn.type = 'button';
  saveBtn.classList.add('hide');
  item.append(saveBtn);
  saveBtn.addEventListener('click', saveEdit);
}

function dumpTask(e) {
  this.parentElement.remove();
}

function editTask(e) {
  const item = this.parentElement;
  const text = item.firstElementChild;
  text.setAttribute('contenteditable', true);
  this.classList.add('hide');
  this.nextElementSibling.classList.remove('hide');
}

function saveEdit(e) {
  const item = this.parentElement;
  const text = item.firstElementChild;
  text.removeAttribute('contenteditable');
  this.classList.add('hide');
  this.previousElementSibling.classList.remove('hide');
}














// document.querySelector('#push').onclick = function () {
//     if (document.querySelector('#newtask input').value.length == 0) {
//         alert("Kindly Enter Task Name!!!!")
//     }

//     else {
//         document.querySelector('#tasks').innerHTML += `
//             <div class="task">
//                 <span id="taskname">
//                     ${document.querySelector('#newtask input').value}
//                 </span>
//                 <button class="edit"><i class="far fa-edit"></i></button>
//                 <button class="delete">
//                     <i class="far fa-trash-alt"></i>
//                 </button>
//             </div>;`

//         document.querySelector('#tasktext').value = "";
//         var current_tasks = document.querySelectorAll(".delete");
//         for (var i = 0; i < current_tasks.length; i++) {
//             current_tasks[i].onclick = function () {
//                 this.parentNode.remove();
//             }
//         }
//         const editButton = document.createElement("button");
//         editButton.innerText = "EDIT";
//         newLi.appendChild(editButton);
//         editButton.addEventListener("click", (e) =>
//           editing(e.target.parentElement)
//         );

//     }
// }

// function editing(liTag) {
//     let liContent = liTag.querySelector("span");
  
//     let input = document.createElement("input");
//     input.type = "text";
//     input.value = liContent.textContent;
//     liTag.append(input);
//     input.focus();
//     input.addEventListener("blur", () => {
//       liContent.innerHTML = input.value;
//       input.remove();
//     });
//   }

  