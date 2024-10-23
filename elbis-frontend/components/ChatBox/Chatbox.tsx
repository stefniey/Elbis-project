// components/ChatBoxWithButton.tsx
import { useState } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';

const ChatBoxWithButton: React.FC = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState<string>('');

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    const handleSendMessage = () => {
        if (input.trim() !== '') {
            setMessages([...messages, input]);
            setInput('');
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button
                onClick={toggleChat}
                className="p-4 text-white rounded-full shadow-lg focus:outline-none"
                style={{backgroundColor:'#824FE7'}}
            >
                <AiOutlineMessage size={24} />
            </button>
            {isChatOpen && (
                <div className="mt-4 p-4 w-72 border rounded-lg shadow-lg bg-white">
                    <div className="flex flex-col h-80">
                        <div className="flex-1 overflow-auto mb-4">
                            {messages.map((message, index) => (
                                <div key={index} className="mb-2 p-2 border-b">
                                    {message}
                                </div>
                            ))}
                        </div>
                        <div className="flex">
                            <input
                                type="text"
                                className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <button
                                className="p-2 bg-blue-500 text-white rounded-r-lg" style={{backgroundColor:'#824FE7'}}
                                onClick={handleSendMessage}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatBoxWithButton;
