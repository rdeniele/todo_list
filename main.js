// let (variable name)  doc.get(name of the ID)
let addToDoBtn = document.getElementById('addToDo');
let inputField = document.getElementById('inputField');
let toDoContainer = document.getElementById('toDoContainer');

// eventerlistener (gives function)
//appendChild (adding child)
addToDoBtn.addEventListener('click',()=>{
    let paragraph=document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText=inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value="";
    paragraph.addEventListener('dblclick',()=>{
        toDoContainer.removeChild(paragraph)
    })
})