// TypeScript interfaces for the Notes component

export interface Note {
    id: number;
    title: string;
    content: string;
    client: string;
    date: string;
    type: 'session' | 'program' | 'progress' | 'nutrition' | 'general';
    tags?: string[];
    lastModified?: string;
    createdBy?: string;
}

export interface Client {
    id: string;
    name: string;
    email?: string;
    phone?: string;
    notes_count: number;
    last_session: string;
    status?: 'active' | 'inactive' | 'paused';
    startDate?: string;
    goals?: string[];
}

export interface Block {
    id: string;
    type: 'paragraph' | 'heading1' | 'heading2' | 'heading3' | 'bullet' | 'number' | 'todo' | 'quote' | 'divider' | 'code';
    content: string;
    completed?: boolean;
    metadata?: {
        createdAt?: string;
        updatedAt?: string;
        author?: string;
    };
}

export interface Template {
    id: string;
    name: string;
    type: 'session' | 'program' | 'progress' | 'nutrition';
    description: string;
    blocks: Block[];
    category?: string;
    isDefault?: boolean;
}

export interface NotesState {
    currentNote: Note | null;
    blocks: Block[];
    selectedBlocks: string[];
    searchQuery: string;
    sidebarOpen: boolean;
    expandedSections: {
        recent: boolean;
        clients: boolean;
        programs: boolean;
        quickActions: boolean;
    };
    showSlashMenu: boolean;
    slashMenuPosition: { x: number; y: number };
    currentBlockId: string;
}

export interface SlashCommand {
    type: Block['type'];
    label: string;
    description: string;
    icon: string;
    shortcut?: string;
}

export interface NotesActions {
    addBlock: (afterId: string, type?: Block['type']) => void;
    updateBlock: (id: string, content: string) => void;
    deleteBlock: (id: string) => void;
    moveBlock: (fromIndex: number, toIndex: number) => void;
    toggleTodo: (blockId: string) => void;
    changeBlockType: (blockId: string, newType: Block['type']) => void;
    duplicateBlock: (blockId: string) => void;
    createNote: (template?: Template) => void;
    saveNote: (note: Note) => Promise<void>;
    deleteNote: (noteId: number) => Promise<void>;
    searchNotes: (query: string) => Note[];
}

export interface NotesContextType extends NotesState, NotesActions {}

// Props interfaces
export interface NotesProps {
    initialNotes?: Note[];
    clients?: Client[];
    templates?: Template[];
    onNoteChange?: (note: Note) => void;
    onNoteSave?: (note: Note) => Promise<void>;
    readOnly?: boolean;
    className?: string;
}

export interface BlockProps {
    block: Block;
    index: number;
    onUpdate: (id: string, content: string) => void;
    onAddBlock: (afterId: string, type?: Block['type']) => void;
    onDeleteBlock: (id: string) => void;
    onKeyDown: (e: React.KeyboardEvent, blockId: string) => void;
    readOnly?: boolean;
}

export interface SidebarProps {
    notes: Note[];
    clients: Client[];
    templates: Template[];
    searchQuery: string;
    onSearchChange: (query: string) => void;
    expandedSections: NotesState['expandedSections'];
    onToggleSection: (section: keyof NotesState['expandedSections']) => void;
    onNoteSelect: (note: Note) => void;
    onCreateNote: (template?: Template) => void;
    sidebarOpen: boolean;
    onToggleSidebar: () => void;
}

export interface SlashMenuProps {
    visible: boolean;
    position: { x: number; y: number };
    onSelectCommand: (type: Block['type']) => void;
    onClose: () => void;
}

// API response types
export interface NotesApiResponse {
    notes: Note[];
    total: number;
    page: number;
    limit: number;
}

export interface ClientsApiResponse {
    clients: Client[];
    total: number;
}

export interface TemplatesApiResponse {
    templates: Template[];
}

// Error types
export interface NotesError {
    message: string;
    code?: string;
    field?: string;
}

export interface NotesApiError extends Error {
    status: number;
    errors?: NotesError[];
}

// Utility types
export type BlockType = Block['type'];
export type NoteType = Note['type'];
export type ClientStatus = Client['status'];
export type SidebarSection = keyof NotesState['expandedSections'];