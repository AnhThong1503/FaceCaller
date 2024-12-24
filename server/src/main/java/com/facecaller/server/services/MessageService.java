package com.facecaller.server.services;

import com.facecaller.server.model.Messages;
import com.facecaller.server.model.Users;
import com.facecaller.server.repository.MessageRepository;
import com.facecaller.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private UserRepository userRepository;

    public Messages sendMessage(String senderUsername, String receiverUsername, String messageText) {
        Users sender = userRepository.findByUsername(senderUsername).orElseThrow(() -> new RuntimeException("Sender not found"));
        Users receiver = userRepository.findByUsername(receiverUsername).orElseThrow(() -> new RuntimeException("Receiver not found"));

        Messages message = new Messages();
        message.setSender(sender);
        message.setReceiver(receiver);
        message.setMessageText(messageText);
        message.setSentAt(LocalDateTime.now());

        return messageRepository.save(message);
    }

    public List<Messages> getMessageHistory(String senderUsername, String receiverUsername) {
        Users sender = userRepository.findByUsername(senderUsername).orElseThrow(() -> new RuntimeException("Sender not found"));
        Users receiver = userRepository.findByUsername(receiverUsername).orElseThrow(() -> new RuntimeException("Receiver not found"));

        return messageRepository.findBySenderAndReceiver(sender, receiver);
    }
}
