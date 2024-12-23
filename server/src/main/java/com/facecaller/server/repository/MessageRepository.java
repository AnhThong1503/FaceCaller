package com.facecaller.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.facecaller.server.model.Messages;

public interface MessageRepository extends JpaRepository<Messages, Long> {

}
