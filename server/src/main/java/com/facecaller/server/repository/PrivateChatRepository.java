package com.facecaller.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.facecaller.server.model.PrivateChats;

public interface PrivateChatRepository extends JpaRepository<PrivateChats, Long> {

}
