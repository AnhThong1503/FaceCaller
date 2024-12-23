package com.facecaller.server.model;

import lombok.Data;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
public class VideoCalls {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long callId;

    @ManyToOne
    @JoinColumn(name = "caller_id", nullable = false)
    private Users caller;

    @ManyToOne
    @JoinColumn(name = "receiver_id", nullable = false)
    private Users receiver;

    @Column(nullable = false)
    private LocalDateTime startTime;

    private LocalDateTime endTime;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private CallStatus callStatus;

    public enum CallStatus {
        COMPLETED, IN_PROGRESS
    }
}
