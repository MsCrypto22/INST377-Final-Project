// Interacting with endpoint created in backend in index.js file
async function sendMessage() {
    console.log('Sending message');
    await fetch('http://localhost:3000/send_message', {
        method: 'POST',
        body: JSON.stringify({
            user: `${document.getElementById('name').value}`,
            date: `${document.getElementById('date').value}`,
            message: `${document.getElementById('message').value}`,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());

    alert("Your form has been submitted!");
}