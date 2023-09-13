const form = document.getElementById("task-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const toDo = document.getElementById("task-to-do");
  const first = document.getElementById("first-task");
  const second = document.getElementById("second-task");
  const third = document.getElementById("third-task");
  const fourth = document.getElementById("fourth-task");
  const fifth = document.getElementById("fifth-task");

  const insertedTask = {
    newtask: toDo.value,
    firstTask: first.value,
    secondtask: second.value,
    thirdTask: third.value,
    fourthTask: fourth.value,
    fifthTask: fifth.value,
  };

  first.innerHTML = `${insertedTask.newtask}`;
});
