import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const TaskEdit = (props) => {
    const history = useNavigate();

    const [formData, updateFormData] = React.useState({
        task: "",
        completed: false
    })

    const [isCompleted, setIsCompleted] = useState(false);

    const handleCheckboxChange = (e) =>{
        setIsCompleted(e.target.completed )
    }

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const task = formData.task !== "" ? formData.task : props.task.task;


        props.onEditTask(props.task.id,task,isCompleted);
        history("/tasks");

    }


    return (
        <div className="container mm-6 mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <form className="form" onSubmit={onFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="task"> <b><i> Task Description </i></b> </label>
                            <input type="text"
                                   className="form-control"
                                   id="task"
                                   name="task"
                                   required
                                   placeholder={props.task.task}
                                   onChange={handleChange}/>
                        </div>

                        <div className="form-check">
                            <label htmlFor="completed"> <b><i> Completed </i></b> </label>
                            <input type="checkbox"
                                   checked={isCompleted}
                                   className="form-check-input"
                                   id="completed"
                                   name="completed"
                                   onChange={handleCheckboxChange}/>
                        </div>
                        <button id="submit" type="submit" className="btn">Submit</button>

                    </form>

                    <div>
                        <a id="Btn2" className={"btn  btn-outline-dark"}   href={"/tasks"}> Go Back </a>
                    </div>

                </div>
            </div>

        </div>
    );


}

export default TaskEdit;