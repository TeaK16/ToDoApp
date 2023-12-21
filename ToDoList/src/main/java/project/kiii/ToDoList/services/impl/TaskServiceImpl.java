package project.kiii.ToDoList.services.impl;

import java.util.List;
import java.util.Optional;

import jakarta.transaction.Transactional;
import project.kiii.ToDoList.models.Task;
import org.springframework.stereotype.Service;

import project.kiii.ToDoList.models.dto.TaskDto;
import project.kiii.ToDoList.models.exceptions.TaskNotFoundException;
import project.kiii.ToDoList.repositories.TaskRepository;
import project.kiii.ToDoList.services.TaskService;

@Service
@Transactional
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;

    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }


    @Override
    public List<Task> findAll() {
        return this.taskRepository.findAll();

    }

    @Override
    public Optional<Task> findById(Long id) {
        return this.taskRepository.findById(id);
    }

    @Override
    public Optional<List<Task>> findByTask(String task) {

        return Optional.of(this.taskRepository.findByTask(task));
    }

    @Override
    public Optional<List<Task>> findByCompleted() {
        return Optional.of(this.taskRepository.findByCompletedTrue());
    }

    @Override
    public Optional<List<Task>> findByNotCompleted() {
        return Optional.of(this.taskRepository.findByCompletedFalse());
    }

    @Override
    public Optional<Task> save(TaskDto taskDto) {

        this.taskRepository.deleteByTask(taskDto.getTask());

        return Optional.of(this.taskRepository.save(new Task(taskDto.getTask(),taskDto.isCompleted())));
    }

    @Override
    public Optional<Task> edit(Long id, TaskDto taskDto) {
        Task task =  this.taskRepository.findById(id).orElseThrow(()->new TaskNotFoundException(id));
        task.setTask(taskDto.getTask());
        task.setCompleted(taskDto.isCompleted());

        return Optional.of(this.taskRepository.save(task));
    }

    @Override
    public void deleteById(Long id) {
        this.taskRepository.deleteById(id);

    }
}
