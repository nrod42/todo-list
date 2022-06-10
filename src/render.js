const createNav = () => {
  const nav = document.createElement('div');
  nav.classList.add('nav');

  const navLeft = document.createElement('div');
  const navRight = document.createElement('div');

  navLeft.textContent = 'Logo';
  navRight.textContent = 'Future Buttons';

  nav.appendChild(navLeft);
  nav.appendChild(navRight);

  return nav;
};

const createSidebar = () => {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');

  const addProjectBtn = document.createElement('button');
  addProjectBtn.classList.add('addProjectBtn');
  addProjectBtn.textContent = 'New Project';

  const mainGroup = document.createElement('div');
  mainGroup.classList.add('mainGroup');

  const inboxBtn = document.createElement('button');
  inboxBtn.textContent = 'Inbox';

  const todayBtn = document.createElement('button');
  todayBtn.textContent = 'Today';

  const upcomingBtn = document.createElement('button');
  upcomingBtn.textContent = 'Upcoming';

  const completedBtn = document.createElement('button');
  completedBtn.textContent = 'Completed';

  inboxBtn.classList.add('inboxBtn');
  todayBtn.classList.add('todayBtn');
  upcomingBtn.classList.add('upcomingBtn');
  completedBtn.classList.add('completedBtn');

  sidebar.appendChild(addProjectBtn);
  sidebar.appendChild(mainGroup);
  mainGroup.appendChild(inboxBtn);
  mainGroup.appendChild(todayBtn);
  mainGroup.appendChild(upcomingBtn);
  mainGroup.appendChild(completedBtn);

  return sidebar;
};

const createProjectGroup = () => {
  const projectGroup = document.createElement('div');
  projectGroup.classList.add('projectGroup');

  return projectGroup;
};

const createPage = () => {
  const page = document.createElement('div');
  page.classList.add('project');

  return page;
};

const actionBtns = () => {
  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('btnWrapper');

  const addToCompletedBtn = document.createElement('button');
  addToCompletedBtn.textContent = 'Completed';
  addToCompletedBtn.classList.add('addToCompletedBtn');

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.classList.add('editBtn');

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.classList.add('delBtn');

  const addToProjectBtn = document.createElement('button');
  addToProjectBtn.textContent = 'Add To Project';
  addToProjectBtn.classList.add('addToProjectBtn');

  btnWrapper.appendChild(addToCompletedBtn);
  btnWrapper.appendChild(editBtn);
  btnWrapper.appendChild(delBtn);
  btnWrapper.appendChild(addToProjectBtn);

  return btnWrapper;
};

export {
  createNav, createSidebar, createProjectGroup, createPage, actionBtns,
};
