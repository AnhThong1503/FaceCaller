export function ChatMessages({ messages }: { messages: { text: string; sender: 'sent' | 'received'; time: string }[] }) {
    return (
        <div className="chat-messages">
            {messages.map((message, index) => (
                <div key={index} className={`message ${message.sender === 'sent' ? 'text-right' : 'text-left'}`}>
                    <div
                        className={`bg-gray-700 p-3 rounded-lg max-w-sm ${message.sender === 'sent' ? 'ml-auto text-white' : 'bg-gray-300 text-black'}`}
                    >
                        <p>{message.text}</p>
                    </div>
                    <span className="text-xs text-gray-500">{message.time}</span>
                </div>
            ))}
        </div>
    );
}
