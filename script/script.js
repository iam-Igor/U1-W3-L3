const firstButton = function () {
  const form = document.getElementById("task-list");

  const toDo = document.getElementById("task-to-do");
  const insertedTask = [
    document.getElementById("first-task"),
    document.getElementById("second-task"),
    document.getElementById("third-task"),
    document.getElementById("fourth-task"),
    document.getElementById("fifth-task"),
  ];

  let i = 0;
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (i < insertedTask.length) {
      if (i > 0) {
        insertedTask[i].value = insertedTask[i - 1].value;
      } else {
        insertedTask[i].value = toDo.value;
      }
      i++;

      if (i < insertedTask.length) {
        insertedTask[i].focus();
      }
    }
  });
};

const goButton = document.getElementById("go");
goButton.addEventListener("click", firstButton);

const deleteFunction = function (event) {
  const deleteRow = event.target;

  const input = deleteRow.previousElementSibling;
  input.value = "";
};
const deleteButton = document.querySelectorAll(".delete");
const form = document.getElementById("task-list");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", deleteFunction);
  }
});

const underlineDone = function (event) {
  const underlineRow = event.target;
  const form = document.getElementById("task-list");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const input2 = underlineRow.previousElementSibling;
    const input3 = input2.previousElementSibling;
    input3.style.textDecoration = "line-through";
  });
};

const doneButton = document.querySelectorAll(".done");
for (let x = 0; x < doneButton.length; x++) {
  doneButton[x].addEventListener("click", underlineDone);
}
