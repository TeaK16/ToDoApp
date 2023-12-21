import './App.css'
import React, {Component} from "react";
import Task from "../Tasks/TaskList/task";
import TaskAdd from "../Tasks/TaskAdd/taskAdd";
import ToDoService from "../../repository/todoRepository";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import TaskEdit from "../Tasks/TaskEdit/taskEdit";
import taskTerm from "../Tasks/TaskTerm/taskTerm";


class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            task: [],
            selectedTask: {}

        }
    }

    render() {
        return(

        <BrowserRouter>
            <main>
                <Routes>
                    <Route path={"/tasks/edit/:id"}
                           element={<TaskEdit onEditTask={this.editTask}
                                              task={this.state.selectedTask}/>}/>
                    <Route path={"/tasks/add"}
                           element={<TaskAdd onAddTask={this.addTask}/>}/>
                    <Route path={"/tasks"}
                           element={<Task task={this.state.task}
                                           onDelete={this.deleteTask}
                                           onEdit={this.loadTaskById}/>}/>
                </Routes>
            </main>
        </BrowserRouter>


    );

    }



    loadTasks = () =>{
        ToDoService.fetchTasks()
            .then((data)=>{
            this.setState({
                task: data.data
            })
        });
    }

    deleteTask = (id) =>{
    ToDoService.deleteTask(id)
        .then(() => {
            this.loadTasks();
        })
    }

    loadTaskById = (id) => {
        ToDoService.fetchTaskById(id)
            .then((data) => {
                this.setState({
                    selectedTask: data.data
                })
            })
    }

    addTask = (task, completed) => {
        ToDoService.addTask(task, completed).then(() => {
            this.loadTasks();
        })
    }

    editTask = (id, task, completed) => {
        ToDoService.editTask(id, task, completed)
            .then(() => {
                this.loadTasks();

        })
    }
    componentDidMount() {
        this.loadTasks();
    }


}

export default App;