import React from 'react';
import { User, Bell, ChevronDown, Search } from 'lucide-react';

export default function TopBar() {
    return (
        <div className="h-[64px] flex-shrink-0 border-b border-gray-100 bg-surface flex items-center justify-between px-6 z-10 shadow-sm relative">
            <div className="flex flex-col flex-shrink-0 mr-4">
                <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-semibold text-text_secondary uppercase tracking-widest">Active Project</span>
                    <span className="text-[10px] bg-primary/10 text-primary font-medium px-2 py-0.5 rounded-full border border-primary/20">
                        RAG Learning Mode
                    </span>
                </div>
                <h2 className="text-[15px] font-semibold text-text_primary leading-tight">Pharmacology Basics</h2>
            </div>

            {/* Global Search */}
            <div className="flex-1 max-w-md mx-4 hidden md:block">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-text_secondary" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search chats, concepts, or projects..."
                        className="w-full pl-10 pr-4 py-2 bg-background border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-text_primary placeholder-text_secondary/70"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4 flex-shrink-0">
                <button className="text-text_secondary hover:text-primary transition-colors relative md:hidden">
                    <Search size={20} />
                </button>
                <button className="text-text_secondary hover:text-primary transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-danger rounded-full pointer-events-none"></span>
                </button>

                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 py-1.5 px-2 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 border border-indigo-200">
                        <User size={16} />
                    </div>
                    <span className="text-sm font-medium text-text_primary hidden sm:block">Sarah Connor</span>
                    <ChevronDown size={14} className="text-text_secondary" />
                </div>
            </div>
        </div>
    );
}
