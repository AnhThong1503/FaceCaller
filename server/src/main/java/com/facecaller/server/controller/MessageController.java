package com.facecaller.server.controller;

import com.facecaller.server.dto.MessageDTO;
import com.facecaller.server.model.Messages;
import com.facecaller.server.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @PostMapping("/send")
    public Messages sendMessage(@RequestBody MessageDTO messageDTO) {
        return messageService.sendMessage(messageDTO.getSenderUsername(), messageDTO.getReceiverUsername(), messageDTO.getMessageText());
    }

    @GetMapping("/{senderUsername}/{receiverUsername}")
    public List<Messages> getMessageHistory(@PathVariable String senderUsername, @PathVariable String receiverUsername) {
        return messageService.getMessageHistory(senderUsername, receiverUsername);
    }
}
