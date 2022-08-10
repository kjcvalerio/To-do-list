

document.getElementById('addTASKbtn').onclick = function(){
    if(document.getElementById('inputField').value.length == 0){
        alert('Please insert a task.');
    }
}





let AddTASKbtn = document.getElementById('addTASKbtn');
let TaskinputField = document.getElementById('inputField');
let tASKcontainer = document.getElementById('TASKcontainer');

AddTASKbtn.addEventListener('click', function(){
    var newTAsk = document.createElement('div');  
    newTAsk.innerText = TaskinputField.value;
    tASKcontainer.appendChild(newTAsk);
    TaskinputField.value = "";
    if(newTAsk!=0){
        var newdelete = document.createElement('button')
    }

    

})

