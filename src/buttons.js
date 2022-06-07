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

    const addToPojectBtn = document.createElement('button');
    addToPojectBtn.textContent = 'Add To Project';
    addToPojectBtn.classList.add('addToPojectBtn');

    btnWrapper.appendChild(addToCompletedBtn) 
    btnWrapper.appendChild(editBtn);
    btnWrapper.appendChild(delBtn);
    btnWrapper.appendChild(addToPojectBtn);

    return btnWrapper;
}

export { actionBtns }