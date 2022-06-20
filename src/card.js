const createCard = (project, task) => {
  const card = document.createElement("div");
  const cardBtn = document.createElement("div");
  const cardBtnContent = document.createElement("div");
  const cardActionBtns = document.createElement("div");
  const cardContent = document.createElement("div");
  const taskName = document.createElement("h3");
  const taskInfo = document.createElement("p");
  const taskDueDate = document.createElement("p");
  const completeBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  const delBtn = document.createElement("button");
  const addToProjectBtn = document.createElement("button");
  const selectProjectForm = document.getElementById("selectProjectForm");

  card.classList.add("card");
  cardBtn.classList.add("cardBtn");
  cardBtnContent.classList.add("cardBtnContent");
  cardActionBtns.classList.add("cardActionBtns");
  cardContent.classList.add("cardContent");

  taskName.textContent = task.getName();
  taskDueDate.textContent = task.getDate();
  taskInfo.textContent = task.getInfo();
  editBtn.textContent = "Edit";
  delBtn.textContent = "Delete";
  addToProjectBtn.textContent = "Add To Project";
  completeBtn.textContent = "Complete";

  // Left Side of Card Button Content
  cardBtnContent.appendChild(taskName);
  cardBtnContent.appendChild(taskDueDate);

  // Right Side of Card Button Content
  cardActionBtns.appendChild(completeBtn);
  cardActionBtns.appendChild(editBtn);
  cardActionBtns.appendChild(delBtn);
  cardActionBtns.appendChild(addToProjectBtn);

  cardBtn.appendChild(cardBtnContent);
  cardContent.appendChild(taskInfo);
  card.appendChild(cardBtn);
  card.appendChild(cardContent);
  card.appendChild(cardActionBtns);

  // Collapsible Card Logic
  cardBtn.addEventListener("click", () => {
    cardBtn.classList.toggle("activeCard");
    const cardContent = cardBtn.nextElementSibling;
    if (cardContent.style.display === "block") {
      cardContent.style.display = "none";
      cardContent.style.maxHeight = "0";
    } else {
      cardContent.style.display = "block";
      cardContent.style.maxHeight = `${cardContent.scrollHeight}px`;
    }
  });

  delBtn.addEventListener("click", () => {
    project.delTask(task.getName());
  });

  addToProjectBtn.addEventListener("click", () => {
    // should show the form
    selectProjectForm.style.display = "flex";
    card.appendChild(selectProjectForm);
  });

  completeBtn.addEventListener("click", () => {
    task.switchStatus();
  });

  return card;
};

export default createCard;
