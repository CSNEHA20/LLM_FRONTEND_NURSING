import React from 'react';
import './chat.css';

export default function ChatLayout({ messagesArea, inputArea }) {
    return (
        <div className="flex-1 flex flex-col bg-[#f0dae0] relative overflow-hidden h-full">
            {/* Section 3: Apply this shade #f0dae0 for the entire background of the chat area */}

            {/* Messages Container Area */}
            <div className="flex-1 overflow-y-auto chat-scrollbar relative">
                {messagesArea}
            </div>

            {/* Input Area */}
            <div className="flex-shrink-0 bg-transparent flex justify-center pb-4 pt-2">
                {inputArea}
            </div>
        </div>
    );
}
