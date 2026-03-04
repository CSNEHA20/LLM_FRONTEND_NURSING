import React from 'react';
import { User, Sparkles } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function MessageBubble({ message }) {
    const isUser = message.role === 'user';

    return (
        <div className={cn(
            "flex w-full",
            isUser ? "justify-end" : "justify-start"
        )}>
            <div className={cn(
                "flex max-w-[85%] sm:max-w-[75%] gap-4",
                isUser ? "flex-row-reverse" : "flex-row"
            )}>

                {/* Avatar */}
                <div className="flex-shrink-0 mt-1">
                    {isUser ? (
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 border border-indigo-200 shadow-sm">
                            <User size={16} />
                        </div>
                    ) : (
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-sm">
                            <Sparkles size={16} />
                        </div>
                    )}
                </div>

                {/* Message Content */}
                <div className={cn(
                    "px-5 py-3.5 rounded-2xl shadow-sm text-[15px] leading-relaxed",
                    isUser
                        ? "bg-gray-100 text-text_primary rounded-tr-sm"
                        : "bg-transparent border-none text-text_primary rounded-tl-sm px-0 py-1 shadow-none"
                )}>
                    {/* Use pre-wrap to respect newlines but don't break simple markdown completely */}
                    <div className="whitespace-pre-wrap">
                        {message.content}
                    </div>
                </div>

            </div>
        </div>
    );
}
