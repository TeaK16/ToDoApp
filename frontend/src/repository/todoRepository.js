 import axios from "../costum-axios/axios";

const ToDoService = {
    fetchTasks:()=> {
        return axios.get("/tasks")
    },
    fetchTaskById: (id) => {
      return axios.get(`/tasks/${id}`);
    },
    deleteTask: (id) =>{
        return axios.delete(`/tasks/delete/${id}`);
    },
    addTask: (task, completed) => {
        return axios.post("/tasks/add",{
            task : task,
            completed: completed
        });

    },
    editTask: (id, task, completed) =>{
        return axios.put(`/tasks/edit/${id}`,{
           task: task,
           completed: completed

        });

    }

}
export default ToDoService;
