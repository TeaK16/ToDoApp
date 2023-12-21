package project.kiii.ToDoList.services;

import project.kiii.ToDoList.models.Task;
import project.kiii.ToDoList.models.dto.TaskDto;

import java.util.List;
import java.util.Optional;

public interface TaskService {
    List<Task> findAll();
    Optional<Task> findById(Long id);
    Optional<List<Task>> findByTask(String task);
    Optional<List<Task>> findByCompleted();
    Optional<List<Task>> findByNotCompleted();
    Optional<Task> save(TaskDto taskDto);
    Optional<Task> edit(Long id, TaskDto taskDto);

    void deleteById(Long id);
}
