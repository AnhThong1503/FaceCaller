'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Cookie from 'js-cookie';

export function Sidebar({ setSelectedChatName }: { setSelectedChatName: (name: string) => void }) {
    // Example state for rooms and friends
    const [rooms, setRooms] = useState([
        { id: 1, name: 'Room 1' },
        { id: 2, name: 'Room 2' },
        { id: 3, name: 'Room 3' },
        { id: 4, name: 'Room 4' },
        { id: 5, name: 'Room 5' },
        { id: 6, name: 'Room 6' },
        { id: 7, name: 'Room 7' },
    ]);

    const [friends, setFriends] = useState([
        { id: 1, name: 'Alice', online: true },
        { id: 2, name: 'Bob', online: false },
        { id: 3, name: 'Charlie', online: true },
        { id: 4, name: 'David', online: false },
        { id: 5, name: 'Eve', online: true },
        { id: 6, name: 'Frank', online: true },
        { id: 7, name: 'Grace', online: false },
    ]);
    const router = useRouter();

    // Handlers for button clicks
    const handleAddFriend = () => {
        alert('Add Friend functionality goes here!');
    };

    const handleCreateRoom = () => {
        alert('Create Room functionality goes here!');
    };

    const handleLogout = () => {
        Object.keys(Cookie.get()).forEach((cookieName) => {
            console.log(cookieName);
            Cookie.remove(cookieName, { path: '/' });
        });

        router.push('/auth');
    };

    return (
        <aside className="sidebar">
            <div className="logo">FaceCaller</div>

            {/* Private Chat Section with border and scroll */}
            <nav className="flex-1 p-4 space-y-4">
                <div className="flex flex-col space-y-4">
                    <h3 className="font-semibold text-lg flex items-center justify-center">Private Chat</h3>
                    <div className="border border-gray-700 rounded-lg p-2 space-y-2 min-h-64 max-h-64 overflow-y-auto">
                        {friends.map((friend) => (
                            <a
                                onClick={() => setSelectedChatName(friend.name)}
                                key={friend.id}
                                href="#"
                                className="nav-item flex justify-between py-2 px-4 border-b border-gray-600 last:border-0"
                            >
                                <span>{friend.name}</span>
                                <span
                                    className={`text-xs ${friend.online ? 'text-green-500' : 'text-gray-500'}`}
                                >
                                    {friend.online ? 'Online' : 'Offline'}
                                </span>
                            </a>
                        ))}
                    </div>
                    {/* Add Friend Button */}
                    <button
                        onClick={handleAddFriend}
                        className="mt-4 w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                    >
                        Add Friend
                    </button>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-600 my-4"></div>

                {/* Rooms Section with border and scroll */}
                <div className="flex flex-col space-y-4">
                    <h3 className="font-semibold text-lg flex items-center justify-center">Rooms</h3>
                    <div className="border border-gray-700 rounded-lg p-2 space-y-2 min-h-64 max-h-64 overflow-y-auto">
                        {rooms.map((room) => (
                            <a
                                onClick={() => setSelectedChatName(room.name)}
                                key={room.id}
                                href="#"
                                className="nav-item flex justify-between py-2 px-4 border-b border-gray-600 last:border-0 items-center flex-col"
                            >
                                {room.name}
                            </a>
                        ))}
                    </div>
                    {/* Create Room Button */}
                    <button
                        onClick={handleCreateRoom}
                        className="mt-4 w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md"
                    >
                        Create Room
                    </button>
                </div>
            </nav>

            {/* Logout Section */}
            <div className="logout p-4">
                <button onClick={handleLogout} className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-md">
                    Logout
                </button>
            </div>
        </aside>
    );
}
