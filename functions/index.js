// index.js
const twilio = require('twilio');

// Replace these with your actual credentials from Twilio console
const accountSid = 'REMOVED';
const authToken = 'REMOVED';
const client = twilio(accountSid, authToken);

// Your message details
client.messages
  .create({
    body: 'Hello! This is a test SMS from my local Node.js script 🚀',
    from: '+18144822540',  // Your Twilio phone number
    to: '+251923770049'     // Recipient's phone number (Ethiopia)
  })
  .then(message => console.log(`✅ Message sent! SID: ${message.sid}`))
  .catch(error => console.error(`❌ Failed to send message: ${error.message}`));
