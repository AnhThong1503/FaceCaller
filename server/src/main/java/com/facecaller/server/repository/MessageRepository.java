package com.facecaller.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.facecaller.server.model.Messages;
import com.facecaller.server.model.Users;

public interface MessageRepository extends JpaRepository<Messages, Long> {
    List<Messages> findBySenderAndReceiver(Users sender, Users receiver);
}
