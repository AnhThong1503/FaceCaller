package com.facecaller.server.model;

import lombok.Data;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Data
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String passwordHash;

    private String displayName;

    private String profilePictureUrl;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }

    @OneToMany(mappedBy = "createdBy")
    private Set<ChatRooms> createdChatRooms;

    @OneToMany(mappedBy = "sender")
    private Set<Messages> sentMessages;

    @OneToMany(mappedBy = "receiver")
    private Set<Messages> receivedMessages;

    @OneToMany(mappedBy = "user")
    private Set<RoomMembers> roomMemberships;

    @OneToMany(mappedBy = "caller")
    private Set<VideoCalls> initiatedCalls;

    @OneToMany(mappedBy = "receiver")
    private Set<VideoCalls> receivedCalls;

    @OneToMany(mappedBy = "user")
    private Set<Media> uploadedMedia;
}
