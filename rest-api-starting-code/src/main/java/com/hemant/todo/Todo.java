package com.hemant.todo;


public class Todo {

	public Todo() {
		
	}
	
	public Todo(int id, String username, String description) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
	}

	private int id;

	private String username;
	
	private String description;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}


	@Override
	public String toString() {
		return "Todo [id=" + id + ", username=" + username + ", description=" + description + "]";
	}

}