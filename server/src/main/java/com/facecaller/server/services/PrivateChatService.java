package com.facecaller.server.services;

import com.facecaller.server.dto.PrivateChatDTO;
import com.facecaller.server.model.PrivateChats;
import com.facecaller.server.model.Users;
import com.facecaller.server.repository.PrivateChatRepository;
import com.facecaller.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PrivateChatService {

    @Autowired
    private PrivateChatRepository privateChatRepository;

    @Autowired
    private UserRepository userRepository;

    public PrivateChatDTO createPrivateChat(Long user1Id, Long user2Id) {
        Users user1 = userRepository.findById(user1Id).orElseThrow(() -> new RuntimeException("User not found"));
        Users user2 = userRepository.findById(user2Id).orElseThrow(() -> new RuntimeException("User not found"));

        PrivateChats chat = privateChatRepository.findByUser1AndUser2(user1, user2);

        if (chat == null) {
            chat = new PrivateChats();
            chat.setUser1(user1);
            chat.setUser2(user2);
            chat = privateChatRepository.save(chat);
        }

        return new PrivateChatDTO(chat.getChatId(), user1.getUserId(), user2.getUserId(), chat.getCreatedAt());
    }
}
