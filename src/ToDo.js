import React,{useState} from 'react';


function  ToDoList(){

    const [task, setTasks] = useState(["Amira","Nour","Aida","Mellisa","Imene"]);
    const [newtask, setNewTask] = useState("");
     


//handel input change 
    function handleInputChange(event) {
      setNewTask (event.target.value);
    }

//add a task 
    function addTask() {
        if (newtask.trim() !== ""){
            setTasks(t=> [...t,newtask ]);
            setNewTask("");
                
             }
          }

    

//delete a task 

function deleteTask(index) {
    style={ "background-color" :"red"};
    const updatedTasks=task.filter((_,i)=> i !==index);
    setTasks(updatedTasks);
}




   
return ( 
    <div className='Test'>
           <input
                  type='text'
                 placeholder='Enter a text ...'
                  value={newtask}
                  onChange={handleInputChange}      
           />
           <button className='add button'onClick={addTask}> Add</button>
           <ol>
                {task.map ((task,index)=>
                <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button'onClick={()=> deleteTask(index)}> 
                            Delete
                        </button>
                 </li>
                )}  
                
           </ol>

    </div>
    
);
}


export default ToDoList;
