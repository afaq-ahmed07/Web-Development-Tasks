let submit_button = document.getElementById('submit-task');
let add_button = document.getElementById('add-task');
let create_div = document.getElementById('create-task');
create_div.style.display = 'none';
submit_button.addEventListener('click', () => {
    let task_info = document.getElementById('newTaskInput').value;
    
    if (task_info !== '') {
        let tasks = document.getElementById('tasks');
        // Create checkbox
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'check';
        checkbox.id = 'task-checkbox'; // Set a unique id for the checkbox
        // Create label
        let label = document.createElement('label');
        label.textContent = task_info; // Use textContent to set label text
        label.htmlFor = 'task-checkbox'; // Associate label with the checkbox
        label.id='task-label';
        let del_button=document.createElement('button');
        del_button.id='del-button';
        del_button.innerHTML="Delete";
        // Append checkbox and label to the tasks div
        tasks.appendChild(checkbox);
        tasks.appendChild(label);
        tasks.appendChild(del_button);

        // Hide the create_div
        create_div.style.display = 'none';
    }
});
add_button.addEventListener('click',()=>{
    create_div.style.display = 'flex';
    document.getElementById('newTaskInput').value="";
})
// del_button=document.getElementById('del-button');
// del_button.addEventListener( "click",() =>{

// })
