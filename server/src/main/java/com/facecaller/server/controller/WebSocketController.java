package com.facecaller.server.controller;

import com.facecaller.server.dto.MessageDTO;
import com.facecaller.server.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketController {

    @Autowired
    private MessageService messageService;

    @MessageMapping("/private-chat")
    @SendTo("/topic/private-chat")
    public MessageDTO sendPrivateMessage(MessageDTO messageDTO) {
        messageService.sendMessage(messageDTO.getSenderUsername(), messageDTO.getReceiverUsername(), messageDTO.getMessageText());
        return messageDTO;
    }
}
