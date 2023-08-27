package com.hemant.todo.controller;

import com.hemant.todo.Todo;
import com.hemant.todo.service.TodoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users/")
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping({"{username}/todos"})
    public List<Todo> retrieveTodos(@PathVariable String username) {
        return todoService.findByUsername(username);

    }

    @GetMapping({"{username}/todos/{id}"})
    public Todo retrieveTodosById(@PathVariable String username, @PathVariable Integer id) {
        return todoService.findByUsernameAndId(username, id);

    }

    @DeleteMapping({"todos/{id}"})
    public ResponseEntity<Void> deleteTodosById(@PathVariable Integer id) {
        todoService.deleteById(id);
        return ResponseEntity.noContent().build();

    }
}
