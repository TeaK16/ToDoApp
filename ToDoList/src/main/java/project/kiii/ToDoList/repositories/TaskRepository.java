package project.kiii.ToDoList.repositories;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository; 
import project.kiii.ToDoList.models.Task;
import java.util.List;
import java.util.Optional;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long>{

    public List<Task> findByTask(String task);
    public List<Task> findByCompletedTrue();
    public List<Task> findByCompletedFalse();

    void deleteByTask(String taskName);
    

}
