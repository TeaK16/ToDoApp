import React from "react";
import {Link} from "react-router-dom";

const TaskTerm = (props) => {
    return (
        <tr>
            <td>{props.term.task}</td>
            <td>{props.term.completed? <p className="comp">Task DONE</p> : <p className="comp">Task NEEDS TO BE COMPLETED</p>}</td>
            <td>
                <Link className={"btn mx-1 justify-content-center editBtn"}
                      id="editBtn"
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/tasks/edit/${props.term.id}`}>
                    Edit
                </Link>
            </td>
            <td>
                <a title={"Delete"}
                   id="deleteBtn"
                   className={"btn mx-1 justify-content-center deleteBtn"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete </a>
            </td>
        </tr>
    );
}

export default TaskTerm;