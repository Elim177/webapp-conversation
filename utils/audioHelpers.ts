async function sendAudioToDify(audioBlob) {
    const formData = new FormData();
    formData.append('file', audioBlob, 'audio.webm'); // 'file' is often the expected field name for uploads
    // You might need to append other Dify specific parameters, like user ID, conversation ID, etc.
    // formData.append('user', 'your_user_id');
    // formData.append('conversation_id', 'existing_conversation_id');

    try {
        const response = await fetch('YOUR_DIFY_APP_API_URL/messages', { // Or whatever your Dify message endpoint is
            method: 'POST',
            headers: {
                'Authorization': `Bearer YOUR_DIFY_API_KEY`, // If using API keys
                // 'Content-Type': 'multipart/form-data' // Browser sets this automatically with FormData
            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Dify response:', data);
        // Update your chat UI with the Dify agent's text response
    } catch (error) {
        console.error('Error sending audio to Dify:', error);
        // Update UI: show error message
    }
}
