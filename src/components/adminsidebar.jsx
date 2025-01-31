import React from 'react';
import '../styles/AdminSideBar.css';
import Icon from '@mdi/react';
import { mdiHome, mdiAccount, mdiFileDocument, mdiTools, mdiExitToApp, mdiHelpCircle, mdiInformationOutline } from '@mdi/js';

const AdminSidebar = () => {
    return (
        <div className="sidebar">
            <div className="user-div">
    <div className="profile-pic"></div>
    <div className="user-info">
        <div className="user-name">Christian Jeremy D. Mesinas</div>
        <div className="user-email">qcjdrmesinas@tip.edu.ph</div>
    </div>
</div>

            <ul className="sidebar-menu">
                <li><a href="/"><Icon className="outline" path={mdiHome} size={1}/><span>Dashboard</span></a></li>
                <li><a href="/about"><Icon className="outline" path={mdiAccount} size={1} /><span>User Management</span></a></li>
                <li><a href="/services"><Icon className="outline" path={mdiFileDocument} size={1} /><span>Logs</span></a></li>
                <li><a href="/contact"><Icon className="outline" path={mdiTools} size={1} /><span>Maintenance</span></a></li>
            </ul>

            <ul className="sidebar-menu bottom">
                <li><a href="/help"><Icon className="outline" path={mdiHelpCircle} size={1} /><span>Help</span></a></li>
                <li><a href="/about"><Icon className="outline" path={mdiInformationOutline} size={1} /><span>About</span></a></li>
                <li><a href="/"><Icon className="outline" path={mdiExitToApp} size={1} /><span>Logout</span></a></li>
            </ul>
        </div>
    );
}

export default AdminSidebar;