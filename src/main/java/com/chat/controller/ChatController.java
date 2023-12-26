package com.chat.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.chat.model.ChatMessage;

@RestController
public class ChatController {

	    @MessageMapping("/message")
	    @SendTo("/topic/return-to")
	    public ChatMessage getContent(@RequestBody ChatMessage message) {
	    
	        return message;
	   }
	}
