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
      insertedTask[i].value = toDo.value;
      i++;
      toDo.value = "";

      if (i < insertedTask.length) {
        insertedTask[i].focus();
      }
    }
  });
};

const goButton = document.getElementById("go");
goButton.addEventListener("click", firstButton);
