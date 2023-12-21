import React,{Component}  from "react";
import TaskTerm from "../TaskTerm/taskTerm";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
class Task extends Component{

    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size:5
        }
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset +this.state.size;
        const pageCount = Math.ceil(this.props.task.length / this.state.size);
        const tasks = this.getTasksPage(offset, nextPageOffset);
        return (

            <div className="container mm-4 mt-5">
                <div className="row">
                    <h1 id="title" className="justify-content-center"><i>Tea's ToDo List</i></h1>
                </div>

                <div className="row">
                    <div className="row">
                        <table id="todoTable" className="table table-bordered justify-content-center">

                            <thead className="thead">
                            <tr>
                                <th scope={"col"} > Task </th>
                                <th scope={"col"}> Completed </th>
                                <th scope={"col"}> Edit Task </th>
                                <th scope={"col"}> Delete Task </th>

                            </tr>
                            </thead>
                            <tbody>
                            {tasks}
                            </tbody>
                        </table>

                        <div>
                            <div>
                                <div>
                                    <Link id="addBtn" className={"btn"} to={"/tasks/add"}> Add a new
                                        task </Link>
                                </div>
                            </div>
                        </div>
                        <div id="pagination">
                        <ReactPaginate
                                       previousLabel={"Previous"}
                                       previousLinkClassName={"page-link previous"}
                                       nextLabel={"Next"}
                                       nextLinkClassName={"page-link next"}
                                       breakLabel={<a href="/#">...</a>}
                                       breakClassName={"page-item"}
                                       pageClassName={"mx-1 page-item"}
                                       pageLinkClassName={"page-link item"}
                                       pageCount={pageCount}
                                       marginPagesDisplayed={2}
                                       pageRangeDisplayed={5}
                                       onPageChange={this.handlePageClick}
                                       containerClassName={"pagination m-4 justify-content-center "}
                                       activeClassName={"active"}/>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }

    getTasksPage = (offset, nextPageOffset) => {
        return this.props.task.map((term)=>{
            return(
                <TaskTerm term = {term}
                          onEdit = {this.props.onEdit}
                          onDelete={this.props.onDelete}/>
            );
        }).filter((task, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }


}

export default Task;