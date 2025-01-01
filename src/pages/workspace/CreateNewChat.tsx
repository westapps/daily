import { IonContent, IonPage, IonText } from '@ionic/react';
import React from 'react';

const CreateNewChat: React.FC = () => (
  <IonPage>
    <IonContent fullscreen className="ion-padding">
      <IonText>
        <h2>Create New Chat</h2>
        {/* Add your chat implementation here */}
      </IonText>
    </IonContent>
  </IonPage>
);

export default CreateNewChat; 