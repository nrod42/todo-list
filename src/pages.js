const createPage = () => {
    const newPage = document.createElement('div');
    newPage.classList.add('newPage');

    return newPage;
}

export { createPage };