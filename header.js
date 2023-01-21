const mainmenu = document.querySelector(".mainmenu")
const remove = document.querySelector(".remove")
const openmenu = document.querySelector(".openmenu")


openmenu.addEventListener('click',show);



openmenu.addEventListener('click',close);


function show(){
    mainmenu.style.display = 'flex';
    mainmenu.style.top= '0';
}

function close(){
    mainmenu.style.top=-'0'
}
