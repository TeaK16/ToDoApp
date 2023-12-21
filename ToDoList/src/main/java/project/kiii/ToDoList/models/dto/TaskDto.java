package project.kiii.ToDoList.models.dto;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
public class TaskDto {


        private String task;
        private boolean completed;

        public TaskDto(){
        }

        public TaskDto(String task, boolean completed){
            this.task = task;
            this.completed = completed;
        }
}
