// Basic example (simplified)
let mediaRecorder;
let audioChunks = [];

async function startRecording() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];

        mediaRecorder.ondataavailable = event => {
            audioChunks.push(event.data);
        };

        mediaRecorder.onstop = async () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/webm' }); // Or 'audio/wav', etc.
            // Now send this audioBlob to your Dify backend
            sendAudioToDify(audioBlob);
        };

        mediaRecorder.start();
        // Update UI: show recording indicator
    } catch (err) {
        console.error('Error accessing microphone:', err);
        // Update UI: show error message
    }
}

function stopRecording() {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
        // Update UI: hide recording indicator
    }
}
