import React, { useState } from 'react';
import { MessageSquare, Plus, Folder, Settings, BookOpen, ChevronDown, ChevronRight, MoreHorizontal, Search } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function Sidebar() {
    const [projectsOpen, setProjectsOpen] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    const projects = [
        { id: 1, name: "Pharmacology Basics", count: 4 },
        { id: 2, name: "Anatomy & Physiology", count: 2 },
        { id: 3, name: "Patient Assessment", count: 7 },
    ];

    const recentChats = [
        { id: 1, title: "Antibiotics classification" },
        { id: 2, title: "Cardiovascular system notes" },
        { id: 3, title: "Pain management protocol" },
    ];

    const filteredChats = recentChats.filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="w-[280px] bg-secondary flex-shrink-0 flex flex-col h-full text-white/90 shadow-lg z-20">
            {/* Logo Area */}
            <div className="p-5 flex items-center gap-3 border-b border-white/10">
                <div className="bg-primary p-2 rounded-lg flex-shrink-0">
                    <BookOpen size={20} className="text-white" />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-[15px] tracking-tight text-white leading-tight">Nursing AI</span>
                    <span className="text-xs text-secondary-foreground text-primary/80 font-medium">RAG Learning Platform</span>
                </div>
            </div>

            {/* New Chat Button */}
            <div className="p-4 pb-2">
                <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-xl transition-colors font-medium text-sm shadow-md">
                    <Plus size={18} />
                    New Chat
                </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar px-3 pb-4 space-y-6 mt-2">

                {/* Projects / Lessons Section */}
                <div>
                    <div
                        className="flex items-center justify-between px-2 mb-2 cursor-pointer group"
                        onClick={() => setProjectsOpen(!projectsOpen)}
                    >
                        <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider flex items-center gap-2 group-hover:text-white/70 transition-colors">
                            <Folder size={14} /> Projects / Lessons
                        </h3>
                        <div className="flex items-center gap-1">
                            <button
                                className="text-white/40 hover:text-white transition-colors p-1"
                                onClick={(e) => { e.stopPropagation(); /* Create project logic */ }}
                                title="New Project"
                            >
                                <Plus size={14} />
                            </button>
                            <span className="text-white/40 group-hover:text-white/70 transition-colors">
                                {projectsOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                            </span>
                        </div>
                    </div>

                    {projectsOpen && (
                        <div className="space-y-0.5">
                            {projects.map(p => (
                                <div key={p.id} className="group flex items-center justify-between px-3 py-2 text-sm text-white/80 hover:bg-white/10 rounded-lg transition-colors cursor-pointer">
                                    <div className="flex items-center gap-2.5 truncate">
                                        <div className="w-2 h-2 rounded-full bg-primary/80 flex-shrink-0"></div>
                                        <span className="truncate">{p.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-xs bg-white/10 px-1.5 py-0.5 rounded text-white/60">{p.count}</span>
                                        <button className="text-white/40 hover:text-white" title="Options">
                                            <MoreHorizontal size={14} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Recent Chats Section */}
                <div>
                    <div className="px-2 mb-3">
                        <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider flex items-center gap-2 mb-2">
                            <MessageSquare size={14} /> Recent Chats
                        </h3>
                        {/* Search History */}
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                                <Search className="h-3 w-3 text-white/40" />
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search history..."
                                className="w-full bg-black/20 border border-white/5 rounded-md py-1.5 pl-7 pr-2 text-xs text-white/90 focus:outline-none focus:border-white/20 transition-colors placeholder-white/30"
                            />
                        </div>
                    </div>

                    <div className="space-y-0.5">
                        {filteredChats.map(c => (
                            <div key={c.id} className="group flex items-center justify-between w-full text-left px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white/90 rounded-lg transition-colors cursor-pointer">
                                <span className="truncate pr-2">{c.title}</span>
                                <button className="opacity-0 group-hover:opacity-100 text-white/40 hover:text-white transition-opacity p-0.5">
                                    <MoreHorizontal size={14} />
                                </button>
                            </div>
                        ))}
                        {filteredChats.length === 0 && (
                            <div className="px-3 py-2 text-sm text-white/40 italic">
                                No chats found
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Profile / Settings Area */}
            <div className="p-3 border-t border-white/10 mt-auto bg-black/10">
                <button className="flex items-center gap-3 w-full px-3 py-2.5 text-sm hover:bg-white/10 rounded-xl transition-colors text-white/80 hover:text-white group">
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Settings size={14} />
                    </div>
                    <div className="flex flex-col items-start flex-1 truncate">
                        <span className="font-medium leading-tight text-[13px]">Settings & Profile</span>
                    </div>
                </button>
            </div>
        </div>
    );
}
