package com.facecaller.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.facecaller.server.model.ChatRooms;

public interface ChatRoomRepository extends JpaRepository<ChatRooms, Long> {

}
