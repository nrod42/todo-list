import makeNav from './makeNav.js';
import {createSidebar} from './sidebar.js';
import {createTaskSection} from './tasks.js';
import './styles.css';

const mainWrapper = document.querySelector('.mainWrapper');

const nav = makeNav();
const sidebar = createSidebar();
const taskSection = createTaskSection();


mainWrapper.appendChild(nav);
mainWrapper.appendChild(sidebar);
mainWrapper.appendChild(taskSection);





//INBOX SHOULD SHOW EVERY ACTIVE TASK, WHETHER OR NOT ITS PART OF A GROUP OR PROJECT
//UPCOMING SHOULD SHOW EVERY TASK IN DATE ORDER THAT HAS A DATE
//COMPLETED SHOULD SHOW TAKS THAT HAVE THE PROPERTY COMPLETED

//COMPLETED BUTTON SAHOULD CHANGE THE TASK PROPERTY TO COMPLETED
//EDIT SHOULD OPEN THE FORM BUT WITH THE TASK PROPERTIES PRE FILLED
//DELETE SHOULD DELETE THE TASK FROM THE TASK ARRAY


//Maybe we can add the card button event listners later so that they have access to the cards themselves