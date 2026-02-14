import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { Button, Dropdown, InlineStack, TextStyle, Thumbnail, TopBar, VerticalStack } from 'jiffy-ui';
import user from '../../../assets/images/user.png';
import { ChevronDown, ChevronLeft, Copy, Eye, FileText, List } from 'jiffy-icons';
import { LogoutIcon } from '../../../assets/Icons';
// import ActionList from 'jiffy-ui/dist/components/Actionlist/Actionlist';


const AppTopbar = () => {
    const { logout, username } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/C6XChange');
    };



    const userMenu1 = [
      {
        id: "file-group",
        title: "File Actions",
        items: [
          {
            id: "new",
            label: "New File",
            leading: <FileText size={16} />,
            onClick: () => alert("New File clicked"),
          },
          {
            id: "open",
            label: "Open File",
            leading: <Eye size={16} />,
            onClick: () => alert("Open File clicked"),
          },
        ],
        separator: true,
      },
      {
        id: "edit-group",
        title: "Edit Actions",
        items: [
          {
            id: "copy-edit",
            label: "Copy",
            leading: <Copy size={16} />,
            onClick: () => alert("Copy clicked"),
          },
          {
            id: "delete-edit",
            label: "Delete",
            leading: LogoutIcon,
            variant: "destructive" as const,
            onClick: () => alert("Delete clicked"),
          },
        ],
      },
    ];


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
    
    const connectLeft = (
      <div className='connect-left-action'>
        <Button variant="Ghost" icon={<List />} iconOnly />
      </div>
     )
    const connectRight = (
      <>
        {/* <ActionList
          items={userMenu1 as any} // temp type patch, fix types to match ActionList requirement
          variant="Bordered"
        >
          <Button variant="Secondary">
            File Menu
          </Button>
        </ActionList> */}
         
        <Dropdown content={userMenu} placement="bottom-end">
          <div className='user-menu-container'>
            <Button variant="Ghost" suffixIcon={<ChevronDown />}>
              <InlineStack gap={3} align={"center"} justifyContent={'center'}>
                <Thumbnail
                  size='Large'
                  src={user}
                  alt={"User login"}
                />
                <VerticalStack gap={0}>
                  <TextStyle variant='heading' size='sm' tone='subdued' as='p' fontWeight='bold'>{'Arvind kumar'}</TextStyle>
                  <TextStyle variant='body' size='md' tone='subdued' as='p'>{username || 'User'}</TextStyle>
                </VerticalStack>
              </InlineStack>
            </Button>
            </div>
        </Dropdown>
        </>
    );
    return (
      <>
        <TopBar title='AppTopbar' connectRight={connectRight} connectLeft={connectLeft} />
      </>
 
    );
};

export default AppTopbar;