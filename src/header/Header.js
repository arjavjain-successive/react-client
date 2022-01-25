import React, { useCallback, useState } from 'react';
import { TopBar } from '@shopify/polaris';
import { useNavigate } from 'react-router';

export default function TopBarExample() {
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    [],
  );
  const handleNavigationToggle = useCallback(() => {
    console.log('toggle navigation visibility');
  }, []);
  const handleadmin= () =>{
    navigate('/admin');
  }
  const handletrainee= () =>{
    navigate('/trainee');
  }
  const handleuser = () =>{
    navigate('/user');
  }
  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{ content: 'Admin',onAction: handleadmin}],
        },
        {
          items: [{ content: 'User',onAction: handleuser}],
        },
        {
          items: [{ content: 'Trainee',onAction: handletrainee}],
        },
      ]}
      initials="AJ"
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  );
  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      onNavigationToggle={handleNavigationToggle}
    />
  );
  return (
    <div style={{ height: '90px' }}>
      {topBarMarkup}
    </div>
  );
}