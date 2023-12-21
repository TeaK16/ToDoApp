package project.kiii.ToDoList.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;

@Data
@Entity
public class Task {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String task;

    private boolean completed;

    public Task(){
    }

    public Task(String task, boolean completed){
        this.task = task;
        this.completed = completed;
    }
}
