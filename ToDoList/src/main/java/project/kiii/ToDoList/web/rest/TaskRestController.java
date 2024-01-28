package project.kiii.ToDoList.web.rest;


import org.apache.catalina.connector.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import project.kiii.ToDoList.models.Task;
import project.kiii.ToDoList.models.dto.TaskDto;
import project.kiii.ToDoList.services.impl.TaskServiceImpl;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class TaskRestController {

    private final TaskServiceImpl taskService;

    public TaskRestController(TaskServiceImpl taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/tasks")
    public List<Task> findAll(){
        return this.taskService.findAll();
    }

    @GetMapping("/tasks/{id}")
    public ResponseEntity<Task> findById(@PathVariable Long id) {
        return this.taskService
                .findById(id).map(task -> ResponseEntity.ok().body(task))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/tasks/add")
    public ResponseEntity<Task> save(@RequestBody TaskDto taskDto){
        return this.taskService.save(taskDto)
                .map(task -> ResponseEntity.ok().body(task))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @PutMapping("/tasks/edit/{id}")
    public ResponseEntity<Task> save(@PathVariable Long id, @RequestBody TaskDto taskDto){
        return this.taskService.edit(id, taskDto)
                .map(task-> ResponseEntity.ok().body(task))
                .orElseGet(() -> ResponseEntity.badRequest().build());
    }

    @DeleteMapping("/tasks/delete/{id}")
    public ResponseEntity deleteById(@PathVariable Long id) {
        this.taskService.deleteById(id);
        if(this.taskService.findById(id).isEmpty()) return ResponseEntity.ok().build();
        return ResponseEntity.badRequest().build();
    }



}
