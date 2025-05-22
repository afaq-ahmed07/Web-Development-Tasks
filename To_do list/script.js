document.addEventListener('click', function (event) {
    if (event.target && event.target.id === 'submit-task') {
        let task_info = document.getElementById('newTaskInput').value;

        if (task_info !== '') {
            let tasks = document.getElementById('tasks');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'check';
            checkbox.className = 'task-checkbox';

            let label = document.createElement('label');
            label.textContent = task_info;
            label.htmlFor = 'task-checkbox';
            label.className = 'task-label';

            let del_button = document.createElement('button');
            del_button.className = 'del-button';
            del_button.innerHTML = 'Delete';

            tasks.appendChild(checkbox);
            tasks.appendChild(label);
            tasks.appendChild(del_button);
            create_div= document.getElementById('create-task');
            create_div.style.display = 'none';
        }
    }
});
document.addEventListener('click', function (event) {
    if (event.target && event.target.id === 'add-task') {
        let tasks = document.getElementById('tasks');
        let create_div = document.createElement('div');
        create_div.id = 'create-task';
        create_div.className = 'create-task';

        let label = document.createElement('label');
        label.htmlFor = 'newTaskInput';
        label.className = 'create-task-label';
        label.innerHTML = 'Create Task:';

        let textarea = document.createElement('textarea');
        textarea.name = 'newTaskInput';
        textarea.id = 'newTaskInput';
        textarea.cols = 30;
        textarea.rows = 10;

        let submit_button = document.createElement('button');
        submit_button.id = 'submit-task';
        submit_button.className = 'submit-task';
        submit_button.textContent = 'Submit';

        create_div.appendChild(label);
        create_div.appendChild(textarea);
        create_div.appendChild(submit_button);
        tasks.appendChild(create_div);

        document.getElementById('newTaskInput').value = "";
    }
});

function project_click(clickedDiv) {
    var projectName = clickedDiv.querySelector('.project-name').innerText;
    loadDoc(projectName);
}

function loadDoc(project_name) {
    task_div.innerHTML= '';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let jsonData = JSON.parse(this.responseText);
            let project = jsonData.find(project => project.project === project_name);

            if (project) {
                let h1Value = project.project;
                let pValue = project.description;

                let project_head = document.createElement('h1');
                project_head.className='project-head';
                project_head.id='project-head';
                project_head.innerHTML=h1Value;

                let project_desc = document.createElement('p');
                project_desc.className="project-desc";
                project_desc.id="project-desc";
                project_desc.innerHTML = pValue;

                let tasks_add_div=document.createElement('div');
                tasks_add_div.className='tasks-add-div';

                let task_head=document.createElement('h1');
                task_head.innerHTML='Today';
                tasks_head.className='tasks-head';

                let add_button=document.createElement('button');
                add_button.className='add-task';
                add_button.id= 'add-task';
                let tasksContainer = document.getElementById('tasks');
                tasksContainer.innerHTML = '';

                // Extract details for each task and create elements
                project.tasks.forEach(function(task, index) {
                    let checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.className='task-checkbox';
                    checkbox.checked = task.checkbox;

                    let label = document.createElement('label');
                    label.innerHTML = task.label;
                    label.className='task-label';

                    let del_button = document.createElement('button');
                    del_button.innerHTML = 'Delete';
                    del_button.className='del-button';

                    // Add these elements to the tasks container
                    tasksContainer.appendChild(checkbox);
                    tasksContainer.appendChild(label);
                    tasksContainer.appendChild(del_button);
                });
            } else {
                console.log(`Project '${project_name}' not found in the JSON data`);
            }
        }
    };
    xhttp.open("GET", "to_do_list.json", true);
    xhttp.send();
}


