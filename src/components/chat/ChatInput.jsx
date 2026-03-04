import React, { useState } from 'react';
import { Send, Mic, Plus, Image as ImageIcon, FileAudio } from 'lucide-react';

export default function ChatInput({ onSend }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onSend(inputValue);
            setInputValue('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
            <form
                onSubmit={handleSubmit}
                className="relative flex flex-col w-full rounded-2xl border border-primary/20 bg-white shadow-sm focus-within:ring-1 focus-within:ring-primary/30 focus-within:border-primary/40 transition-shadow transition-colors"
            >
                <div className="flex-1 max-h-48 overflow-y-auto w-full">
                    <textarea
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Message Nursing AI..."
                        className="w-full bg-transparent border-0 focus:ring-0 pt-4 pb-2 px-4 text-sm sm:text-base resize-none custom-scrollbar outline-none min-h-[52px]"
                        rows={1}
                        style={{ height: '70px' }}
                    />
                </div>

                {/* Icons Row at the bottom of the input area */}
                <div className="flex flex-row items-center justify-between px-3 pb-2 pt-1 border-t border-transparent">
                    {/* Left Icons - Media, Audio, Files */}
                    <div className="flex items-center gap-1">
                        <button
                            type="button"
                            className="p-2 text-text_secondary/80 hover:text-primary transition-colors rounded-xl flex items-center justify-center hover:bg-gray-100"
                            title="Add Media"
                        >
                            <Plus size={20} strokeWidth={2.5} />
                        </button>
                        <button
                            type="button"
                            className="p-2 text-text_secondary/80 hover:text-primary transition-colors rounded-xl items-center justify-center hover:bg-gray-100 hidden sm:flex"
                            title="Upload Image"
                        >
                            <ImageIcon size={18} strokeWidth={2} />
                        </button>
                        <button
                            type="button"
                            className="p-2 text-text_secondary/80 hover:text-primary transition-colors rounded-xl items-center justify-center hover:bg-gray-100 hidden sm:flex"
                            title="Voice Note"
                        >
                            <FileAudio size={18} strokeWidth={2} />
                        </button>
                    </div>

                    {/* Right Icons - Mic and Send */}
                    <div className="flex items-center gap-1">
                        <button
                            type="button"
                            className="p-2 text-text_secondary/80 hover:text-primary transition-colors rounded-xl flex items-center justify-center hover:bg-gray-100"
                            title="Voice Recognition"
                        >
                            <Mic size={18} strokeWidth={2} />
                        </button>
                        <button
                            type="submit"
                            disabled={!inputValue.trim()}
                            className="p-2 bg-primary text-white rounded-xl disabled:opacity-50 disabled:bg-primary/60 hover:bg-primary/90 transition-all flex items-center justify-center ml-1"
                        >
                            <Send size={16} className="ml-0.5" strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </form>
            <div className="text-center mt-3 text-xs text-text_secondary/80 flex justify-center items-center gap-1">
                Nursing AI Assistant can make mistakes. Consider verifying important clinical information.
            </div>
        </div>
    );
}
