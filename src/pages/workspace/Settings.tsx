import { IonContent, IonPage, IonText } from '@ionic/react';
import React from 'react';

const Settings: React.FC = () => (
  <IonPage>
    <IonContent fullscreen className="ion-padding">
      <IonText>
        <h2>Settings</h2>
        {/* Add your Settings implementation here */}
      </IonText>
    </IonContent>
  </IonPage>
);

export default Settings; 