package com.facecaller.server.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PrivateChatDTO {
    private Long chatId;
    private Long user1Id;
    private Long user2Id;
    private LocalDateTime createdAt;
}