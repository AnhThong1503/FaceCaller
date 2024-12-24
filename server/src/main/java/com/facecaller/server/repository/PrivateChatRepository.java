package com.facecaller.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.facecaller.server.model.PrivateChats;
import com.facecaller.server.model.Users;

public interface PrivateChatRepository extends JpaRepository<PrivateChats, Long> {
    PrivateChats findByUser1AndUser2(Users user1, Users user2);
}
