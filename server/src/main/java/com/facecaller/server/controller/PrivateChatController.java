package com.facecaller.server.controller;

import com.facecaller.server.dto.PrivateChatDTO;
import com.facecaller.server.services.PrivateChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/private-chats")
public class PrivateChatController {

    @Autowired
    private PrivateChatService privateChatService;

    @PostMapping("/create")
    public PrivateChatDTO createPrivateChat(@RequestParam Long user1Id, @RequestParam Long user2Id) {
        return privateChatService.createPrivateChat(user1Id, user2Id);
    }
}
