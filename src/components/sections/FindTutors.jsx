import { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import { db } from '../../firebase.js';
import { collection, addDoc } from "firebase/firestore";
import emailjs from "emailjs-com";


export const FindTutors = () => {

  const allTutors = [
    {
      id: 1,
      name: "Abel Mekonnen",
      field: "Mathematics",
      location: "Addis Ababa",
      cost: "200br/hr",
      image: "/images/abel.jpg"
    },
    {
      id: 2,
      name: "Sara Kifle",
      field: "Physics",
      location: "Addis Ababa",
      cost: "250br/hr",
      image: "/images/sara.jpg"
    },
    {
      id: 3,
      name: "Yonatan Getachew",
      field: "Chemistry",
      location: "Addis Ababa",
      cost: "300br/hr",
      image: "/images/yonatan.jpg"
    },
    // Add more tutors here
  ];
       
  const [userName, setUserName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [contactError, setContactError] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [fieldFilter, setFieldFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const filteredTutors = allTutors.filter(tutor => {
    return (
      (fieldFilter === "" || tutor.field === fieldFilter) &&
      (locationFilter === "" || tutor.location === locationFilter)
    );
  });

  const isValidEmailOrPhone = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+251|0)?9\d{8}$/; // Ethiopian mobile format
    return emailRegex.test(value) || phoneRegex.test(value);
  };
  

  const uniqueFields = [...new Set(allTutors.map(t => t.field))];
  const uniqueLocations = [...new Set(allTutors.map(t => t.location))];

  return (
    <section 
      id="findTutors"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-center">Find a Tutor</h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <select
              className="border p-2 rounded"
              value={fieldFilter}
              onChange={(e) => setFieldFilter(e.target.value)}
            >
              <option value="" className="bg-black text-white py-3 px-6 rounded font-medium">
                 All Fields</option>
              {uniqueFields.map((field) => (
                <option className="bg-black text-white py-3 px-6 rounded font-medium"
                 key={field} value={field}>{field}</option>
              ))}
            </select>

            <select
              className="border p-2 rounded"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="" className="bg-black text-white py-3 px-6 rounded font-medium">
                   All Locations</option>
              {uniqueLocations.map((loc) => (
                <option className="bg-black text-white py-3 px-6 rounded font-medium
                                  hover:bg-[0_0_15px_rgba(59,130,246,0.4)]" 
                                  key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredTutors.map((tutor) => (
              <div key={tutor.id} className="bg-black border shadow-md rounded-lg p-4  
                 hover:-translate-y-0.5
                 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                <img
                    src={tutor.image}
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />

                <h2 className="text-xl font-semibold">{tutor.name}</h2>
                <p>🎓 {tutor.field}</p>
                <p>📍 {tutor.location}</p>
                <p>💰 {tutor.cost}</p>
                <button 
                    onClick={() => setSelectedTutor(tutor)}
                    className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium 
                               transition relative overflow-hidden 
                               hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    >
                        Book Now
                </button>
              </div>
            ))}
          </div>

          {selectedTutor && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-black p-6 border rounded-lg shadow-lg w-full max-w-md relative">
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-blue-500"
                        onClick={() => setSelectedTutor(null)}
                    >
                     ❌
                    </button>

                    <h2 className="text-xl font-bold mb-2">Booking {selectedTutor.name}</h2>
                    <p>Subject: {selectedTutor.field}</p>
                    <p>Location: {selectedTutor.location}</p>
                    <p>Rate: {selectedTutor.cost}</p>
            
                    <form className="mt-4 space-y-3"
                        onSubmit={async (e) => {
                            e.preventDefault();

                            if (!isValidEmailOrPhone(contactInfo)) {
                              setContactError("Please enter a valid email or Ethiopian phone number.");
                              return;
                            }
                            setContactError(""); // clear error if valid
                            
                             // Helper to send SMS via your backend API
                        async function sendSMS(phone, message) {
                          try {
                            const response = await fetch('/api/send-sms', {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({ phone, message })
                            });
                            
                            const data = await response.json();
                            if (!data.success) {
                              throw new Error(data.error || 'Failed to send SMS');
                            }
                            return true;
                          } catch (err) {
                            console.error('SMS sending error:', err);
                            return false;
                          }
                        }

                          
                            try {
                              await addDoc(collection(db, "tutor_bookings"), {
                                tutorName: selectedTutor.name,
                                subject: selectedTutor.field,
                                location: selectedTutor.location,
                                rate: selectedTutor.cost,
                                userName,
                                contactInfo,
                                message,
                                bookedAt: new Date()
                              });
                          
                              const isEmail = contactInfo.includes('@');
                              if (isEmail) {

                                await emailjs.send(
                                  'service_qrf4men',
                                  'template_5ibwloi',
                                  {
                                    user_name: userName,
                                    to_email: contactInfo,  // should be email
                                    tutor_name: selectedTutor.name,
                                    tutor_field: selectedTutor.field,
                                    tutor_location: selectedTutor.location,
                                    tutor_rate: selectedTutor.cost,
                                  },
                                  '6SeqJNCvuUWqSo5ut'
                                );
                              } else {
                                // Send SMS for phone numbers
                                const smsMessage = `Hello ${userName}, your booking for ${selectedTutor.name} (${selectedTutor.field}) has been received. We will contact you soon.`;
                                const smsSent = await sendSMS(contactInfo, smsMessage);
                          
                                if (!smsSent) {
                                  setSuccessMessage('❌ Failed to send SMS notification.');
                                  return;
                                }
                              }

                              setSuccessMessage("✅ Booking submitted successfully!");
                              setTimeout(() => {
                                setSelectedTutor(null);
                                setUserName("");
                                setContactInfo("");
                                setMessage("");
                                setSuccessMessage("");
                              }, 2000);
                            } catch (error) {
                              console.error("Error submitting booking:", error);
                              setSuccessMessage("❌ Failed to submit booking. Try again.");
                            }

                           

                          }}
                    >
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white 
                            transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                            required
                        />
                        <input
                            type="text"
                            placeholder="Phone or Email"
                            value={contactInfo}
                            onChange={(e) => setContactInfo(e.target.value)} // ETFUTJEARNB1JT11YK9V57XB Twilio Code
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white 
                            transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                            required
                        /> 
                            {contactError && (
                              <p className="text-red-500 text-sm mt-1">{contactError}</p>
                            )}
                        <textarea
                            placeholder="Message or preferred time"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white 
                            transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" 
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium 
                            transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                            Submit Booking Request
                        </button>
                    </form>
                        {successMessage && (
                        <p className="mt-4 text-cyan-400 text-center font-semibold">
                            {successMessage}
                        </p>
                        )}


                </div>
            </div>
        )}
        </div>
      </RevealOnScroll>
    </section>
  );
};
