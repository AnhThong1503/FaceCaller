package com.facecaller.server.model;

import lombok.Data;
import jakarta.persistence.*;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Data
public class Messages {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long messageId;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "sender_id", nullable = false)
    private Users sender;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "receiver_id")
    private Users receiver;

    @ManyToOne
    @JoinColumn(name = "room_id")
    private ChatRooms room;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String messageText;

    @ManyToOne
    @JoinColumn(name = "file_id")
    private Media file;

    @Column(nullable = false)
    private LocalDateTime sentAt;
}
