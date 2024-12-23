package com.facecaller.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.facecaller.server.model.VideoCalls;

public interface VideoCallRepository extends JpaRepository<VideoCalls, Long> {

}
