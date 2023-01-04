import React from 'react';

export default function App() {
    const title = "Hello";
    const enhancedTitle = title + ' - React App!';

    return (
        <div>
            <h1>{enhancedTitle}</h1>
        </div>
    )
}