import React from 'react';

export default function App() {
    const title = "Hello";
    const enhancedTitle = title + ' - React App!';

    const sendNotification = () => {
        electron.notificationAPI.sendNotification("hello");
    }

    return (
        <div>
            <h1>{enhancedTitle}</h1>
            <button onClick={sendNotification}>Send Notification</button>
        </div>
    )
}