package com.chat.model;

public class ChatMessage {

	
	private String Content;
	private String name;
	
	public String getContent() {
		return Content;
	}
	public void setContent(String content) {
		Content = content;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
	public ChatMessage() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Object getSender() {
		// TODO Auto-generated method stub
		return null;
	}
	
	
}
