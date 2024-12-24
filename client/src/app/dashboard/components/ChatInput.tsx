export function ChatInput({
    inputMessage,
    setInputMessage,
    handleSendMessage,
}: {
    inputMessage: string;
    setInputMessage: React.Dispatch<React.SetStateAction<string>>;
    handleSendMessage: () => void;
}) {
    return (
        <footer className="chat-input flex items-center p-4 bg-grayscale-800 border-t border-grayscale-700">
            <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="input-box flex-1 px-4 py-2 bg-grayscale-700 text-white border border-grayscale-600 rounded-md focus:outline-none"
            />

            {/* File Upload Icon */}
            <label htmlFor="file-input" className="ml-3 cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="file-icon w-6 h-6"
                >
                    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM6 13h12v-2H6z" />
                </svg>
                <input
                    id="file-input"
                    type="file"
                    className="hidden"
                    onChange={(e) => console.log(e.target.files)}
                />
            </label>

            {/* Send Button */}
            <button
                onClick={handleSendMessage}
                className="send-button ml-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
                Send
            </button>
        </footer>
    );
}
