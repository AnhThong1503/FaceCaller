export function ChatHeader() {
    return (
        <header className="chat-header">
            <h2 className="text-xl font-semibold text-white">Chat Room</h2>
            <div className="flex items-center space-x-4">
                <button className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600">
                    Video Call
                </button>
            </div>
        </header>
    );
}
