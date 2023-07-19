let objData={};
let title=document.getElementById('title');
let notes=document.getElementById('notes');
let noteCreation = document.querySelector('.newNotes');
let showList=document.querySelector('.taskListDiv');
noteCreation.addEventListener('click',(e)=>{
    e.preventDefault();
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    objData[title.value]={title:title.value, notes:notes.value ,created:"00:00:00",updated:"00:00:00"}
    console.log(noteCreation.innerText)
    if(noteCreation.innerText==="create new notes"){
        console.log(time,objData[title.value]['created'])
        objData[title.value]['created']=time;
    }
    else{
        objData[title.value]['updated']=time;
    }
    title.value=""
    notes.value=""
    console.log(objData);
    showTask();
    noteCreation.innerText="create new notes";
})
function showTask(){
    showList.innerHTML="";
    for(let key in objData){
        let showdiv = document.createElement('div');
        let showTitle = document.createElement('h2');
        showTitle.setAttribute('class','clickTitle');
        let showNotes = document.createElement('p');
        showNotes.setAttribute('class','dispNotes');
        let created =document.createElement('h2');
        created.innerText=objData[key].created;
        let updated =document.createElement('h2');
        updated.innerText=objData[key].updated;
        showTitle.innerText=objData[key].title;
        showNotes.innerText=objData[key].notes;
        showTitle.addEventListener('click',(e)=>{
            e.preventDefault();
            showNotes.classList.toggle("dispNotes");
        })  
        let close=document.createElement('button');  
        close.setAttribute('class','delete');
        close.innerText="X";
        close.addEventListener('click',(e)=>{
            e.preventDefault();
            delete objData[key];
            showTask();
            console.log(objData);
        });
        let edit=document.createElement('button');
        edit.setAttribute('class','Edit');
        edit.innerText="Edit";
        edit.addEventListener('click',(e)=>{
            title.value=objData[key].title
            notes.value=objData[key].notes
            noteCreation.innerText="Update Notes";
        });
        
        showdiv.appendChild(showTitle);
        showdiv.appendChild(close);
        showdiv.appendChild(edit);
        showdiv.appendChild(created);
        showdiv.appendChild(updated);
        showdiv.appendChild(showNotes);
        showList.appendChild(showdiv)
    }   
}