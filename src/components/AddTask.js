import React from 'react';
import { useState } from 'react';


const AddTask = ({ onAdd }) => {
    let [text, setText] = useState("");
    let [day, setDay] = useState("");
    let [reminder, setReminder] = useState(false);


    const onSubmit=(el) =>{
        el.preventDefault();
        //Remember before you click on Save Task it refresh the page?
        //That is the default setting  of the useState()
        //a preventDefault is called on the event when submitting the form to prevent a browser reload/refresh. 
        if(!text){
            alert("Please add a new task");
            return;
            //if there is no return here, how it can potentially affect the code?
            //if there is no return, still sumit the data, return stop that from happenning
        }
        if(!day){
            alert("Please add a day");
            return;
            //if there is no return here, how it can potentially affect the code?
        }
        onAdd({text, day, reminder});
        //onAdd is a function cuzzy

        setText('');
        setDay('');
        setReminder(false);
        //(1*) this alone does not reset the tickbox, it will be a mismatch between the UI and data 
        //(1*) to solve this you have to put in checked={reminder} (pass reminder in as a prop)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" placeholder="Add new task"  
                value={text}
                onChange={(el)=> setText(el.target.value)}/>
            </div>

            <div className="form-control">
                <label htmlFor="">Day and Time</label>
                <input type="text" placeholder="Add Day & Time"
                value={day}
                onChange={(el)=> setDay(el.target.value)} />
            </div>

            <div className="form-control form-control-check">
                <label htmlFor="">Set Reminder</label>
                
                <input type="checkbox"
                checked ={reminder}
                value={reminder}
                onChange={(el)=> setReminder(el.currentTarget.checked)}/>
            </div>

            <input type="submit" value="Save Task"  className="btn btn-block"
            style={{backgroundColor: "lightBlue", color:"black"}}/> 

        </form>
    )
}

export default AddTask;