import React, { useState, useRef, useEffect } from 'react';
import {
    Search,
    Plus,
    ChevronRight,
    ChevronDown,
    User,
    FileText,
    Clock,
    MoreHorizontal,
    GripVertical,
    Type,
    List,
    CheckSquare,
    Quote,
    Hash
} from 'lucide-react';
import './Notes.css';

interface Note {
    id: number;
    title: string;
    content: string;
    client: string;
    date: string;
    type: string;
}

interface Client {
    name: string;
    id: string;
    notes_count: number;
    last_session: string;
}

interface Block {
    id: string;
    type: 'paragraph' | 'heading1' | 'heading2' | 'heading3' | 'bullet' | 'number' | 'todo' | 'quote';
    content: string;
    completed?: boolean;
}

interface Template {
    name: string;
    type: string;
    description: string;
}

const Notes: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeNote, setActiveNote] = useState<Note | null>(null);
    const [expandedSections, setExpandedSections] = useState({
        recent: true,
        clients: true,
        programs: true,
        quickActions: true
    });
    const [blocks, setBlocks] = useState<Block[]>([
        { id: '1', type: 'heading1', content: 'Client Session - Sarah M.' },
        { id: '2', type: 'paragraph', content: 'Date: October 15, 2025' },
        { id: '3', type: 'heading2', content: 'Session Goals' },
        { id: '4', type: 'bullet', content: 'Weight loss - target 15 lbs in 12 weeks' },
        { id: '5', type: 'bullet', content: 'Strength building - focus on compound movements' },
        { id: '6', type: 'bullet', content: 'Improve cardiovascular endurance' },
        { id: '7', type: 'heading2', content: 'Today\'s Workout' },
        { id: '8', type: 'number', content: 'Warm-up: 10 min treadmill at moderate pace' },
        { id: '9', type: 'number', content: 'Squats: 3 sets of 12 reps at bodyweight' },
        { id: '10', type: 'number', content: 'Push-ups: 3 sets of 8 reps (modified on knees)' },
        { id: '11', type: 'number', content: 'Plank: 3 sets of 30 seconds' },
        { id: '12', type: 'heading2', content: 'Notes & Observations' },
        { id: '13', type: 'paragraph', content: 'Sarah showed great form on squats. Need to work on push-up progression. Very motivated and asking good questions.' },
        { id: '14', type: 'todo', content: 'Create custom nutrition plan', completed: false },
        { id: '15', type: 'todo', content: 'Schedule follow-up in 3 days', completed: false },
        { id: '16', type: 'quote', content: 'I\'m excited to see how strong I can get! - Sarah' }
    ]);
    const [showSlashMenu, setShowSlashMenu] = useState(false);
    const [slashMenuPosition, setSlashMenuPosition] = useState({ x: 0, y: 0 });
    const [currentBlockId, setCurrentBlockId] = useState<string>('');

    // Sample data
    const notes: Note[] = [
        {
            id: 1,
            title: "Client Session - Sarah M.",
            content: "Initial consultation completed. Goals: weight loss, strength building.",
            client: "Sarah Martinez",
            date: "2025-10-15",
            type: "session"
        },
        {
            id: 2,
            title: "Workout Plan - HIIT Program",
            content: "High-intensity interval training program for intermediate clients.",
            client: "General",
            date: "2025-10-14",
            type: "program"
        },
        {
            id: 3,
            title: "Progress Notes - John D.",
            content: "Week 4 progress: Lost 5 lbs, bench press increased significantly.",
            client: "John Davis",
            date: "2025-10-13",
            type: "progress"
        }
    ];

    const clients: Client[] = [
        { name: "Sarah Martinez", id: "sarah-m", notes_count: 3, last_session: "2025-10-15" },
        { name: "John Davis", id: "john-d", notes_count: 8, last_session: "2025-10-13" },
        { name: "Mike Wilson", id: "mike-w", notes_count: 5, last_session: "2025-10-12" },
        { name: "Lisa Chen", id: "lisa-c", notes_count: 4, last_session: "2025-10-11" }
    ];

    const templates: Template[] = [
        { name: "Session Notes", type: "session", description: "Template for client session notes" },
        { name: "Program Plan", type: "program", description: "Workout program template" },
        { name: "Progress Review", type: "progress", description: "Client progress tracking template" },
        { name: "Nutrition Notes", type: "nutrition", description: "Nutrition coaching notes" }
    ];

    const blockTypes = [
        { type: 'paragraph', label: 'Text', icon: Type },
        { type: 'heading1', label: 'Heading 1', icon: Hash },
        { type: 'heading2', label: 'Heading 2', icon: Hash },
        { type: 'heading3', label: 'Heading 3', icon: Hash },
        { type: 'bullet', label: 'Bulleted List', icon: List },
        { type: 'number', label: 'Numbered List', icon: List },
        { type: 'todo', label: 'To-do List', icon: CheckSquare },
        { type: 'quote', label: 'Quote', icon: Quote }
    ];

    const toggleSection = (section: keyof typeof expandedSections) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const addBlock = (afterId: string, type: Block['type'] = 'paragraph') => {
        const newBlock: Block = {
            id: Date.now().toString(),
            type,
            content: '',
            completed: type === 'todo' ? false : undefined
        };

        const afterIndex = blocks.findIndex(b => b.id === afterId);
        const newBlocks = [...blocks];
        newBlocks.splice(afterIndex + 1, 0, newBlock);
        setBlocks(newBlocks);
        setShowSlashMenu(false);

        // Focus the new block
        setTimeout(() => {
            const newBlockElement = document.querySelector(`[data-block-id="${newBlock.id}"]`);
            if (newBlockElement) {
                (newBlockElement as HTMLElement).focus();
            }
        }, 0);
    };

    const updateBlock = (id: string, content: string) => {
        setBlocks(prev => prev.map(block =>
            block.id === id ? { ...block, content } : block
        ));
    };

    const handleKeyDown = (e: React.KeyboardEvent, blockId: string) => {
        if (e.key === '/' && e.currentTarget.textContent === '') {
            e.preventDefault();
            const rect = e.currentTarget.getBoundingClientRect();
            setSlashMenuPosition({ x: rect.left, y: rect.bottom });
            setCurrentBlockId(blockId);
            setShowSlashMenu(true);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            addBlock(blockId);
        }
    };

    const changeBlockType = (blockId: string, newType: Block['type']) => {
        setBlocks(prev => prev.map(block =>
            block.id === blockId ? {
                ...block,
                type: newType,
                completed: newType === 'todo' ? false : undefined
            } : block
        ));
        setShowSlashMenu(false);
    };

    const toggleTodo = (blockId: string) => {
        setBlocks(prev => prev.map(block =>
            block.id === blockId ? { ...block, completed: !block.completed } : block
        ));
    };

    const renderBlock = (block: Block) => {
        const commonProps = {
            key: block.id,
            'data-block-id': block.id,
            contentEditable: true,
            suppressContentEditableWarning: true,
            onInput: (e: React.FormEvent<HTMLDivElement>) =>
                updateBlock(block.id, e.currentTarget.textContent || ''),
            onKeyDown: (e: React.KeyboardEvent) => handleKeyDown(e, block.id),
            className: 'block-content'
        };

        switch (block.type) {
            case 'heading1':
                return (
                    <div className="block-wrapper" key={block.id}>
                        <div className="block-controls">
                            <GripVertical size={16} className="drag-handle" />
                            <Plus
                                size={16}
                                className="add-block"
                                onClick={() => addBlock(block.id)}
                            />
                        </div>
                        <h1 {...commonProps} className="block-content heading-1">
                            {block.content}
                        </h1>
                    </div>
                );
            case 'heading2':
                return (
                    <div className="block-wrapper" key={block.id}>
                        <div className="block-controls">
                            <GripVertical size={16} className="drag-handle" />
                            <Plus
                                size={16}
                                className="add-block"
                                onClick={() => addBlock(block.id)}
                            />
                        </div>
                        <h2 {...commonProps} className="block-content heading-2">
                            {block.content}
                        </h2>
                    </div>
                );
            case 'heading3':
                return (
                    <div className="block-wrapper" key={block.id}>
                        <div className="block-controls">
                            <GripVertical size={16} className="drag-handle" />
                            <Plus
                                size={16}
                                className="add-block"
                                onClick={() => addBlock(block.id)}
                            />
                        </div>
                        <h3 {...commonProps} className="block-content heading-3">
                            {block.content}
                        </h3>
                    </div>
                );
            case 'bullet':
                return (
                    <div className="block-wrapper list-item" key={block.id}>
                        <div className="block-controls">
                            <GripVertical size={16} className="drag-handle" />
                            <Plus
                                size={16}
                                className="add-block"
                                onClick={() => addBlock(block.id)}
                            />
                        </div>
                        <div className="list-wrapper">
                            <span className="bullet">•</span>
                            <div {...commonProps} className="block-content">
                                {block.content}
                            </div>
                        </div>
                    </div>
                );
            case 'number':
                return (
                    <div className="block-wrapper list-item" key={block.id}>
                        <div className="block-controls">
                            <GripVertical size={16} className="drag-handle" />
                            <Plus
                                size={16}
                                className="add-block"
                                onClick={() => addBlock(block.id)}
                            />
                        </div>
                        <div className="list-wrapper">
                            <span className="number">1.</span>
                            <div {...commonProps} className="block-content">
                                {block.content}
                            </div>
                        </div>
                    </div>
                );
            case 'todo':
                return (
                    <div className="block-wrapper list-item" key={block.id}>
                        <div className="block-controls">
                            <GripVertical size={16} className="drag-handle" />
                            <Plus
                                size={16}
                                className="add-block"
                                onClick={() => addBlock(block.id)}
                            />
                        </div>
                        <div className="list-wrapper">
                            <input
                                type="checkbox"
                                checked={block.completed || false}
                                onChange={() => toggleTodo(block.id)}
                                className="todo-checkbox"
                            />
                            <div
                                {...commonProps}
                                className={`block-content ${block.completed ? 'completed' : ''}`}
                            >
                                {block.content}
                            </div>
                        </div>
                    </div>
                );
            case 'quote':
                return (
                    <div className="block-wrapper" key={block.id}>
                        <div className="block-controls">
                            <GripVertical size={16} className="drag-handle" />
                            <Plus
                                size={16}
                                className="add-block"
                                onClick={() => addBlock(block.id)}
                            />
                        </div>
                        <blockquote {...commonProps} className="block-content quote">
                            {block.content}
                        </blockquote>
                    </div>
                );
            default:
                return (
                    <div className="block-wrapper" key={block.id}>
                        <div className="block-controls">
                            <GripVertical size={16} className="drag-handle" />
                            <Plus
                                size={16}
                                className="add-block"
                                onClick={() => addBlock(block.id)}
                            />
                        </div>
                        <div {...commonProps} className="block-content paragraph">
                            {block.content || (
                                <span className="placeholder">
                  Type '/' for commands or just start writing...
                </span>
                            )}
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="notes-container">
            {/* Main Content Area */}
            <div className={`main-content ${sidebarOpen ? 'with-sidebar' : 'full-width'}`}>
                {/* Header */}

                {/* Editor */}
                <div className="editor-container">
                    <div className="page-title">
                        <FileText size={24} className="page-icon" />
                        <h1 contentEditable suppressContentEditableWarning className="editable-title">
                            Training Notes
                        </h1>
                    </div>

                    <div className="editor-content">
                        {blocks.map(renderBlock)}

                        {/* Add first block if empty */}
                        {blocks.length === 0 && (
                            <div className="empty-state">
                                <Plus size={24} />
                                <p>Click here or type '/' to add your first block</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Right Sidebar */}
            <aside className={`sidebar ${sidebarOpen ? 'open' : 'collapsed'}`}>
                <div className="sidebar-header">
                    <div className="search-container">
                        <Search size={16} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search notes..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                    </div>
                    <button
                        className="sidebar-toggle"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <ChevronRight className={sidebarOpen ? 'rotated' : ''} />
                    </button>
                </div>

                <div className="sidebar-content">
                    {/* Recent Notes */}
                    <div className="sidebar-section">
                        <button
                            className="section-header"
                            onClick={() => toggleSection('recent')}
                        >
                            {expandedSections.recent ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                            <Clock size={16} />
                            <span>Recent</span>
                        </button>
                        {expandedSections.recent && (
                            <div className="section-content">
                                {notes.slice(0, 3).map(note => (
                                    <div key={note.id} className="note-item">
                                        <div className="note-title">{note.title}</div>
                                        <div className="note-meta">{note.date}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Clients */}
                    <div className="sidebar-section">
                        <button
                            className="section-header"
                            onClick={() => toggleSection('clients')}
                        >
                            {expandedSections.clients ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                            <User size={16} />
                            <span>Clients</span>
                        </button>
                        {expandedSections.clients && (
                            <div className="section-content">
                                {clients.map(client => (
                                    <div key={client.id} className="client-item">
                                        <div className="client-name">{client.name}</div>
                                        <div className="client-meta">
                                            {client.notes_count} notes • {client.last_session}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Templates */}
                    <div className="sidebar-section">
                        <button
                            className="section-header"
                            onClick={() => toggleSection('programs')}
                        >
                            {expandedSections.programs ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                            <FileText size={16} />
                            <span>Templates</span>
                        </button>
                        {expandedSections.programs && (
                            <div className="section-content">
                                {templates.map((template, index) => (
                                    <div key={index} className="template-item">
                                        <div className="template-name">{template.name}</div>
                                        <div className="template-description">{template.description}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Quick Actions */}
                    <div className="sidebar-section">
                        <button
                            className="section-header"
                            onClick={() => toggleSection('quickActions')}
                        >
                            {expandedSections.quickActions ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                            <Plus size={16} />
                            <span>Quick Actions</span>
                        </button>
                        {expandedSections.quickActions && (
                            <div className="section-content">
                                <button className="action-button">
                                    <Plus size={16} />
                                    New Note
                                </button>
                                <button className="action-button">
                                    <User size={16} />
                                    New Client File
                                </button>
                                <button className="action-button">
                                    <FileText size={16} />
                                    Use Template
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </aside>

            {/* Slash Command Menu */}
            {showSlashMenu && (
                <div
                    className="slash-menu"
                    style={{
                        left: slashMenuPosition.x,
                        top: slashMenuPosition.y
                    }}
                >
                    {blockTypes.map(blockType => {
                        const Icon = blockType.icon;
                        return (
                            <button
                                key={blockType.type}
                                className="slash-menu-item"
                                onClick={() => changeBlockType(currentBlockId, blockType.type as Block['type'])}
                            >
                                <Icon size={16} />
                                <span>{blockType.label}</span>
                            </button>
                        );
                    })}
                </div>
            )}

            {/* Click outside to close slash menu */}
            {showSlashMenu && (
                <div
                    className="slash-menu-overlay"
                    onClick={() => setShowSlashMenu(false)}
                />
            )}
        </div>
    );
};

export default Notes;