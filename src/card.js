const createCard = (task) => {
  const card = document.createElement("div");
  const cardBtn = document.createElement("div");
  const cardBtnContent = document.createElement("div");
  const cardBtnContentLeft = document.createElement("div");
  const cardBtnContentRight = document.createElement("div");
  const cardContent = document.createElement("div");
  const taskName = document.createElement("h3");
  const taskInfo = document.createElement("p");
  const taskDueDate = document.createElement("p");
  const completeBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  const delBtn = document.createElement("button");
  const addToProjectBtn = document.createElement("button");

  card.classList.add("card");
  cardBtn.classList.add("cardBtn");
  cardBtnContent.classList.add("cardBtnContent");
  cardBtnContentLeft.classList.add("cardBtnContentLeft");
  cardBtnContentRight.classList.add("cardBtnContentRight");
  cardContent.classList.add("cardContent");

  taskName.textContent = task.getName();
  taskDueDate.textContent = task.getDate();
  taskInfo.textContent = task.getInfo();
  completeBtn.textContent = "Complete";
  editBtn.textContent = "Edit";
  delBtn.textContent = "Delete";
  addToProjectBtn.textContent = "Add To Project";

  // Left Side of Card Button Content
  cardBtnContentLeft.appendChild(taskName);
  cardBtnContentLeft.appendChild(taskDueDate);

  // Right Side of Card Button Content
  cardBtnContentRight.appendChild(completeBtn);
  cardBtnContentRight.appendChild(editBtn);
  cardBtnContentRight.appendChild(delBtn);
  cardBtnContentRight.appendChild(addToProjectBtn);

  // Whole Card Button Content
  cardBtnContent.appendChild(cardBtnContentLeft);
  cardBtnContent.appendChild(cardBtnContentRight);

  cardBtn.appendChild(cardBtnContent);
  cardContent.appendChild(taskInfo);
  card.appendChild(cardBtn);
  card.appendChild(cardContent);

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

  editBtn.addEventListener("click", () => {});

  return card;
};

export default createCard;
