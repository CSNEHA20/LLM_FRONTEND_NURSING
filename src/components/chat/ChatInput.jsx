import React, { useState } from 'react';
import { Send, Paperclip, Mic } from 'lucide-react';

export default function ChatInput({ onSend }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onSend(text.trim());
            setText('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="relative w-full shadow-popup rounded-2xl bg-surface border border-gray-100 flex items-end">

            <button
                type="button"
                className="p-3 text-text_secondary hover:text-primary transition-colors flex-shrink-0 mb-1 ml-1 cursor-pointer"
                title="Attach file (future)"
            >
                <Paperclip size={20} />
            </button>

            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about drugs, nursing concepts, or syllabus topics..."
                className="flex-1 max-h-48 min-h-[56px] py-4 px-2 bg-transparent focus:outline-none resize-none text-[15px] text-text_primary placeholder-text_secondary"
                rows={1}
            />

            {/* Optional Mic Icon */}
            <button
                type="button"
                className="p-3 text-text_secondary hover:text-primary transition-colors flex-shrink-0 mb-1 cursor-pointer"
                title="Voice input (future)"
            >
                <Mic size={20} />
            </button>

            <button
                type="submit"
                disabled={!text.trim()}
                className={`p-2.5 mb-2 mr-2 rounded-xl flex-shrink-0 transition-all ${text.trim()
                    ? 'bg-primary text-white shadow-md hover:bg-primary/90'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
            >
                <Send size={18} className={text.trim() ? "ml-0.5" : ""} />
            </button>

        </form>
    );
}
