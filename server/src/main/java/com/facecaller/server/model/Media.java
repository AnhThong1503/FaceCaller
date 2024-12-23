package com.facecaller.server.model;

import lombok.Data;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
public class Media {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long mediaId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Users user;

    private String fileType;

    @Column(nullable = false)
    private String fileUrl;

    private Long fileSize;

    @Column(nullable = false)
    private LocalDateTime uploadedAt;
}
