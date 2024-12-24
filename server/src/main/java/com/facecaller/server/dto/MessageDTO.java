package com.facecaller.server.dto;

import lombok.Data;

@Data
public class MessageDTO {
    private String senderUsername;
    private String receiverUsername;
    private String messageText;
}
