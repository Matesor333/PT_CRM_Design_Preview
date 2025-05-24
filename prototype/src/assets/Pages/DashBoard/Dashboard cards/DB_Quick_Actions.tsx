import React from 'react';

interface QuickActionsProps {
    openAddClientPopup: () => void;
}

function QuickActions({ openAddClientPopup }: QuickActionsProps) {
    return(
        <div className="quick-actions">
            <h3>Quick Actions</h3>
            <button onClick={openAddClientPopup}>Add New Client</button>
            <button>Schedule Session</button>
            <button>Create Task</button>
            <button>View Reports</button>
        </div>
    );
};
export default QuickActions;
