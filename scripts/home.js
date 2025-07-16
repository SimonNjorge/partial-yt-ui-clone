let sidebar = document.querySelector('.sidebar');
let sidebarExpanded = false;
let main = document.querySelector('main');

function expandSideBar(){
    sidebar.style.display = 'initial';
    main.classList.remove('mob-res');
    sidebarExpanded = true;
}

document.querySelector('.js-menu')
 .addEventListener('click', () => {
    if(document.documentElement.clientWidth <= 400) {
        if(!sidebarExpanded){
            expandSideBar();
        } else {
            sidebar.style.display = 'none';
            main.classList.add('mob-res');
            sidebarExpanded = false;
        }
    } 
 });

 setInterval(() => {
    if(document.documentElement.clientWidth > 400) {
        expandSideBar();
    }
 }, 1000);