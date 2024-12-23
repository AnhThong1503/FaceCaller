package com.facecaller.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.facecaller.server.model.Media;

public interface MediaRepository extends JpaRepository<Media, Long> {

}
