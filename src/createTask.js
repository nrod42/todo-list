import { actionBtns } from "./render";
import { addCollapsibles } from "./buttons";

const createTask = (title, description, dueDate, priority, project) => ({
  title,
  description,
  dueDate,
  priority,
  project,
  id: Math.floor(Math.random() * 101),
  createCard() {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.id = this.id;

    const cardContent = document.createElement("div");
    cardContent.classList.add("cardContent");

    const collapsible = document.createElement("button");
    collapsible.classList.add("collapsible");
    collapsible.textContent = this.title;

    const cardDescription = document.createElement("p");
    cardDescription.textContent = `Note: ${this.description}`;

    const cardDueDate = document.createElement("p");
    cardDueDate.textContent = `Due Date: ${this.dueDate}`;

    if (this.priority === "low") {
      collapsible.classList.add("lowPriority");
    } else if (this.priority === "med") {
      collapsible.classList.add("medPriority");
    } else if (this.priority === "high") {
      collapsible.classList.add("highPriority");
    }

    cardContent.appendChild(cardDescription);
    cardContent.appendChild(cardDueDate);
    cardContent.appendChild(actionBtns());
    card.appendChild(collapsible);
    card.appendChild(cardContent);

    return card;
  },
});

export default createTask;
