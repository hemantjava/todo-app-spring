package com.hemant.todo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import com.hemant.todo.Todo;
import org.springframework.stereotype.Service;

@Service
public class TodoService {

    private static final List<Todo> todos = new ArrayList<>();

    private static int todosCount = 0;

    static {
        todos.add(new Todo(++todosCount, "hemantjava", "Get AWS Certified"));
        todos.add(new Todo(++todosCount, "hemantjava", "Learn DevOps"));
        todos.add(new Todo(++todosCount, "hemantjava", "Learn Full Stack Development"));
    }

    public List<Todo> findByUsername(String username) {
        Predicate<? super Todo> predicate =
                todo -> todo.getUsername().equalsIgnoreCase(username);
        return todos.stream().filter(predicate).toList();
    }

    public Todo addTodo(String username, String description) {
        Todo todo = new Todo(++todosCount, username, description);
        todos.add(todo);
        return todo;
    }

    public void deleteById(int id) {
        Predicate<? super Todo> predicate = todo -> todo.getId() == id;
        todos.removeIf(predicate);
    }

    public Todo findById(int id) {
        Predicate<? super Todo> predicate = todo -> todo.getId() == id;
        return todos.stream().filter(predicate).findFirst().orElseThrow(()->new RuntimeException("id not present"+id));
    }

    public void updateTodo(Todo todo) {
        deleteById(todo.getId());
        todos.add(todo);
    }

    public Todo findByUsernameAndId(String username, Integer id) {
       return todos.stream().filter(todo -> (todo.getId() == id && todo.getUsername().equalsIgnoreCase(username)))
                .findFirst().orElseThrow(()->new RuntimeException("id not present"+id));
    }
}