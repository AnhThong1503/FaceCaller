package com.facecaller.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.facecaller.server.model.RoomMembers;
import com.facecaller.server.model.RoomMembers.RoomMemberId;

public interface RoomMemberRepository extends JpaRepository<RoomMembers, RoomMemberId> {

}
