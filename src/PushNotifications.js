import React from 'react';
import { getFirebaseMessagingToken, onMessageListener } from './firebase';

const PushNotifications = () => {
    const [tokenFound, setTokenFound] = React.useState(false);
    getFirebaseMessagingToken(setTokenFound)

    onMessageListener().then(payload => {
        console.log(payload);
    })

    return <div>
        {tokenFound && 'Notification Permission Enabled!!'}
        {!tokenFound && <>
            'Need notification permission!!'
            <br/>
            <button type="button" onClick={() => {
                console.log("Ask for permissions again!");
            }}>Click here to enable permissions</button>
        </>}
    </div>
    
}

export default PushNotifications;