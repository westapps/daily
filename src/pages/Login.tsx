import {
    IonButton,
    IonContent,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonText,
} from '@ionic/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement login logic
    // On successful login, navigate to the workspace
    navigate('/workspace');
  };

  const handleGoogleLogin = () => {
    // Implement Google OAuth login logic
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput
              value={username}
              onIonChange={(e) => setUsername(e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              type="password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
            />
          </IonItem>
        </IonList>
        <IonButton expand="block" onClick={handleLogin}>
          Login
        </IonButton>
        <IonButton expand="block" color="medium" onClick={handleGoogleLogin}>
          Login with Google
        </IonButton>
        <IonText className="ion-text-center">
          <p>
            Don't have an account?{' '}
            <Link to="/register">Create New User</Link>
          </p>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default Login; 