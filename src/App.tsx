import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Workspace from './pages/Workspace';

const App: React.FC = () => (
  <IonApp>
    <Router>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic React App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/workspace/*" element={<Workspace />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </IonContent>
    </Router>
  </IonApp>
);

export default App;