const functions = require("firebase-functions");
const twilio = require("twilio");

// 🔐 Replace with your actual Twilio credentials
const accountSid = "REMOVED";
const authToken = "REMOVED";
const client = new twilio(accountSid, authToken);

// 🚀 Cloud Function to send SMS
exports.sendSMS = functions.https.onCall(async (data, context) => {
  const phone = data.phone;
  const message = data.message;

  try {
    const response = await client.messages.create({
      body: message,
      to: phone,       // recipient phone number
      from: "+18144822540" // your Twilio number
    });
    return { success: true, sid: response.sid };
  } catch (error) {
    return { success: false, error: error.message };
  }
});
