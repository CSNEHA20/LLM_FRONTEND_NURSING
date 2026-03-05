import React from 'react';
import { User, Sparkles } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function ChatMessage({ messageText, senderType }) {
    const isUser = senderType === 'user';

    return (
        <div className={cn(
            "w-full flex py-4 px-4 sm:px-6 md:px-8",
            isUser ? "justify-end" : "justify-start"
        )}>
            <div className={cn(
                "flex max-w-[85%] sm:max-w-[70%] gap-4",
                isUser ? "flex-row-reverse" : "flex-row"
            )}>
                {/* Avatar */}
                <div className="flex-shrink-0 mt-1">
                    {isUser ? (
                        <div className="w-8 h-8 rounded-full bg-[#f0dae0] flex items-center justify-center text-[#b1103e] shadow-sm">
                            <User size={16} />
                        </div>
                    ) : (
                        <div className="w-8 h-8 rounded-full bg-[#b1103e] flex items-center justify-center text-white shadow-sm">
                            <Sparkles size={16} />
                        </div>
                    )}
                </div>

                {/* Bubble */}
                <div className={cn(
                    "px-5 py-3.5 rounded-2xl bubble-shadow text-[15px] leading-relaxed",
                    isUser
                        ? "bg-[#b1103e] text-white rounded-tr-sm"
                        : "bg-[#e58ea8] border border-primary/10 text-[#111827] rounded-tl-sm"
                )}>
                    {messageText}
                </div>
            </div>
        </div>
    );
}
