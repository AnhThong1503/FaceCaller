package com.facecaller.server.model;

import lombok.Data;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
public class RoomMembers {

    @EmbeddedId
    private RoomMemberId id;

    @ManyToOne
    @MapsId("roomId")
    @JoinColumn(name = "room_id")
    private ChatRooms room;

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "user_id")
    private Users user;

    @Column(nullable = false, updatable = false)
    private LocalDateTime joinedAt;

    @Embeddable
    @Data
    public static class RoomMemberId implements java.io.Serializable {
        private Long roomId;
        private Long userId;
    }
}
