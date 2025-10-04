import React, { useState, useEffect, useRef } from 'react';
import BasicAcountInfo from "./Widgets-Profile/Basic-Acount-Info.tsx";
import BusinessInfo from "./Widgets-Profile/Business-Info.tsx";
import ProfilePicture from "./Widgets-Profile/ProfilePicture.tsx";
import Subscription from "./Widgets-Profile/Subscription.tsx";
import './profile-popup.css';

interface ProfilePopUpProps {
    isOpen: boolean;
    onClose: () => void;
}

function ProfilePopUp({ isOpen, onClose }: ProfilePopUpProps) {
    const popupRef = useRef<HTMLDivElement>(null);

    // Close popup when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                onClose();
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    // Handle tab switching
    const [activeTab, setActiveTab] = useState('personal');
    
    if (!isOpen) return null;

    return(
        <div className="profile-popup-overlay">
            <div className="profile-popup-container" ref={popupRef}>
                <button className="close-popup-btn" onClick={onClose}>×</button>
                

                <header className="account-header">
                    <div className="container">
                        <div className="account-overview">
                            <div className="account-left">
                                <div className="profile-avatar">AT</div>
                                <div className="account-info">
                                    <h1>Alex Thompson</h1>
                                    <div className="account-meta">
                                        <span className="account-email">alex.thompson@gmail.com</span>
                                        <span className="account-id">ID: PT-2023-001547</span>
                                    </div>
                                    <div className="account-stats">
                                        <div className="stat">
                                            <span className="stat-value">28</span>
                                            <span className="stat-label">Active Clients</span>
                                        </div>
                                        <div className="stat">
                                            <span className="stat-value">45</span>
                                            <span className="stat-label">Total Clients</span>
                                        </div>
                                        <div className="stat">
                                            <span className="stat-value">Jan 15, 2023</span>
                                            <span className="stat-label">Member Since</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="account-right">
                                <div className="subscription-badge">
                                    <div className="subscription-plan">Professional Plan</div>
                                    <div className="subscription-status">
                                        <span className="status status--success">Active</span>
                                        <span className="renewal-text">Renews Nov 4, 2025</span>
                                    </div>
                                </div>
                                <div className="account-actions">
                                    <button className="btn btn--outline" id="export-data">Export CRM Data</button>
                                    <button className="btn btn--secondary" id="contact-support">Contact Support</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="main-content">
                    <div className="container">

                        <div className="settings-tabs-container">
                            <nav className="settings-tabs">
                                <button 
                                    className={`settings-tab ${activeTab === 'personal' ? 'active' : ''}`} 
                                    onClick={() => setActiveTab('personal')}
                                >
                                    <span className="tab-icon">👤</span>
                                    Personal Information
                                </button>
                                <button 
                                    className={`settings-tab ${activeTab === 'subscription' ? 'active' : ''}`} 
                                    onClick={() => setActiveTab('subscription')}
                                >
                                    <span className="tab-icon">💳</span>
                                    Subscription & Billing
                                </button>
                                <button 
                                    className={`settings-tab ${activeTab === 'clients' ? 'active' : ''}`} 
                                    onClick={() => setActiveTab('clients')}
                                >
                                    <span className="tab-icon">👥</span>
                                    Client Management
                                </button>
                                <button 
                                    className={`settings-tab ${activeTab === 'security' ? 'active' : ''}`} 
                                    onClick={() => setActiveTab('security')}
                                >
                                    <span className="tab-icon">🔒</span>
                                    Account & Security
                                </button>
                                <button 
                                    className={`settings-tab ${activeTab === 'preferences' ? 'active' : ''}`} 
                                    onClick={() => setActiveTab('preferences')}
                                >
                                    <span className="tab-icon">⚙️</span>
                                    System Preferences
                                </button>
                            </nav>
                        </div>


                        <div className="settings-content">

                            <div className={`settings-tab-content ${activeTab === 'personal' ? 'active' : ''}`} id="personal-tab">
                                <div className="cards-grid">

                                    <BasicAcountInfo/>

                                    <BusinessInfo/>

                                    <ProfilePicture/>
                                </div>
                            </div>


                            <div className={`settings-tab-content ${activeTab === 'subscription' ? 'active' : ''}`} id="subscription-tab">
                                <Subscription/>
                            </div>


                            <div className={`settings-tab-content ${activeTab === 'clients' ? 'active' : ''}`} id="clients-tab">
                                <div className="cards-grid">
                                    <div className="card">
                                        <div className="card__body">
                                            <h3 className="section-title">Client Limits & Usage</h3>
                                            <div className="client-stats">
                                                <div className="stat-item">
                                                    <div className="stat-label">Current Active Clients</div>
                                                    <div className="stat-value">28 of 50</div>
                                                    <div className="stat-bar">
                                                        <div className="stat-fill" style={{ width: '56%' }}></div>
                                                    </div>
                                                </div>
                                                <div className="stat-item">
                                                    <div className="stat-label">Total Clients Managed</div>
                                                    <div className="stat-value">45</div>
                                                </div>
                                                <div className="stat-item">
                                                    <div className="stat-label">Available Client Slots</div>
                                                    <div className="stat-value">22</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card__body">
                                            <h3 className="section-title">Default Session Settings</h3>
                                            <div className="form-grid">
                                                <div className="form-group">
                                                    <label className="form-label">Default Session Duration</label>
                                                    <select className="form-control">
                                                        <option value="30">30 minutes</option>
                                                        <option value="45">45 minutes</option>
                                                        <option value="60" selected>60 minutes</option>
                                                        <option value="90">90 minutes</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Default Reminder Time</label>
                                                    <select className="form-control">
                                                        <option value="2">2 hours before</option>
                                                        <option value="4">4 hours before</option>
                                                        <option value="24" selected>24 hours before</option>
                                                        <option value="48">48 hours before</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className={`settings-tab-content ${activeTab === 'security' ? 'active' : ''}`} id="security-tab">
                                <div className="cards-grid">
                                    <div className="card">
                                        <div className="card__body">
                                            <h3 className="section-title">Login Security</h3>
                                            <div className="security-settings">
                                                <div className="security-item">
                                                    <div className="security-info">
                                                        <h5>Password</h5>
                                                        <p>Last changed on Aug 15, 2025</p>
                                                    </div>
                                                    <button className="btn btn--outline">Change Password</button>
                                                </div>
                                                <div className="security-item">
                                                    <div className="security-info">
                                                        <h5>Two-Factor Authentication</h5>
                                                        <p>Add an extra layer of security to your account</p>
                                                    </div>
                                                    <label className="toggle-switch">
                                                        <input type="checkbox" id="two-factor" />
                                                        <span className="toggle-slider"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className={`settings-tab-content ${activeTab === 'preferences' ? 'active' : ''}`} id="preferences-tab">
                                <div className="cards-grid">
                                    <div className="card">
                                        <div className="card__body">
                                            <h3 className="section-title">Interface Settings</h3>
                                            <div className="form-grid">
                                                <div className="form-group">
                                                    <label className="form-label">Theme</label>
                                                    <select className="form-control">
                                                        <option value="light" selected>Light</option>
                                                        <option value="dark">Dark</option>
                                                        <option value="auto">Auto (System)</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Language</label>
                                                    <select className="form-control">
                                                        <option value="en" selected>English</option>
                                                        <option value="es">Spanish</option>
                                                        <option value="fr">French</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>


                <div className="save-bar" id="save-bar">
                    <div className="container">
                        <div className="save-bar-content">
                            <div className="save-info">
                                <span className="save-icon">●</span>
                                You have unsaved changes
                            </div>
                            <div className="save-actions">
                                <button className="btn btn--outline save-btn-small" id="discard-changes">Discard</button>
                                <button className="btn btn--primary save-btn-small" id="save-changes">Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePopUp;