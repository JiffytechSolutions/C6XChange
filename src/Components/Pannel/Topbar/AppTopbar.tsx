import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { Button, Dropdown, TopBar } from 'jiffy-ui';


const AppTopbar = () => {
    const { logout, username } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const userMenu = (
        <div style={{ padding: "8px", minWidth: "200px" }}>
          <div style={{ padding: "12px", borderBottom: "1px solid #eee", marginBottom: "8px" }}>
            <strong>{username || 'User'}</strong>
            <div style={{ fontSize: "12px", color: "#666" }}>Logged in</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <button style={{ padding: "8px 12px", border: "none", background: "none", textAlign: "left", cursor: "pointer" }}>
              Profile Settings
            </button>
            <button style={{ padding: "8px 12px", border: "none", background: "none", textAlign: "left", cursor: "pointer" }}>
              Billing
            </button>
            <button style={{ padding: "8px 12px", border: "none", background: "none", textAlign: "left", cursor: "pointer" }}>
              Support
            </button>
            <hr style={{ margin: "8px 0", border: "none", borderTop: "1px solid #eee" }} />
            <button onClick={handleLogout} style={{ padding: "8px 12px", border: "none", background: "none", textAlign: "left", cursor: "pointer", color: "#ef4444" }}>
              Sign Out
            </button>
          </div>
        </div>
      );
    const connectRight = (
        <Dropdown content={userMenu} placement="bottom-end">
            <Button variant="Primary">User Menu</Button>
        </Dropdown>
    );
    return (
       <>
            {/* <h1>AppTopbar</h1>
            <Button onClick={handleLogout}>
                Logout
            </Button> */}
            <TopBar title='AppTopbar' connectRight={connectRight} />
        </>
 
    );
};

export default AppTopbar;