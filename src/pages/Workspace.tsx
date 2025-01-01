import {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonMenuButton,
    IonMenuToggle,
    IonPage,
    IonRouterOutlet,
    IonSplitPane,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ChineseToEnglish from './workspace/ChineseToEnglish';
import CreateNewChat from './workspace/CreateNewChat';
import InputDailyData from './workspace/InputDailyData';
import OptimizeEnglish from './workspace/OptimizeEnglish';
import Settings from './workspace/Settings';

const Workspace: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    { title: 'Create New Chat', path: '/workspace/create-new-chat' },
    { title: 'ChineseToEnglish', path: '/workspace/chinese-to-english' },
    { title: 'OptimizeEnglish', path: '/workspace/optimize-english' },
    { title: 'Input Daily Data', path: '/workspace/input-daily-data' },
    { title: 'Settings', path: '/workspace/settings' },
  ];

  const handleLogout = () => {
    // Implement logout logic
    navigate('/login');
  };

  return (
    <IonPage>
      <IonSplitPane contentId="main-content">
        <IonMenu contentId="main-content">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              {menuItems.map((item, index) => (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem routerLink={item.path}>{item.title}</IonItem>
                </IonMenuToggle>
              ))}
              <IonMenuToggle autoHide={false}>
                <IonItem button onClick={handleLogout}>
                  Logout
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>
        </IonMenu>

        <IonPage id="main-content">
          <IonHeader>
            <IonToolbar>
              <IonMenuButton slot="start" />
              <IonTitle>Workspace</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <IonRouterOutlet>
              <Routes>
                <Route
                  path="/workspace/create-new-chat"
                  element={<CreateNewChat />}
                />
                <Route
                  path="/workspace/chinese-to-english"
                  element={<ChineseToEnglish />}
                />
                <Route
                  path="/workspace/optimize-english"
                  element={<OptimizeEnglish />}
                />
                <Route
                  path="/workspace/input-daily-data"
                  element={<InputDailyData />}
                />
                <Route
                  path="/workspace/settings"
                  element={<Settings />}
                />
                {/* Redirect to a default page */}
                <Route
                  path="/workspace"
                  element={<CreateNewChat />}
                />
              </Routes>
            </IonRouterOutlet>
          </IonContent>
        </IonPage>
      </IonSplitPane>
    </IonPage>
  );
};

export default Workspace; 