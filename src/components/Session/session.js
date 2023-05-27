import React, { useEffect, useState } from 'react';
import Navbar from "../landingPage/Navbar"
import Footer from "../landingPage/Footer"
import { Link,useNavigate } from 'react-router-dom';

const SessionScreen = () => {

  const [patient, setPatient] = useState('');
  const [session, setSession] = useState('');
  const [subSession, setSubSession] = useState('');
  const [timer, setTimer] = useState(0);
  const [isSessionRunning, setIsSessionRunning] = useState(false);
  const [sessionRating, setSessionRating] = useState(null);
  const [patientList, setPatientList] = useState([]);





  useEffect(() => {
    async function fetchPatientList() {
      const res = await fetch("/patientlist", {
        credentials: "include",
      });
      const data = await res.json();
      setPatientList(data.patientlist)
    }
    fetchPatientList();
    console.log(patientList)
  }, [patientList]);




  const handleStartSession = () => {
    setIsSessionRunning(true);
    setTimer(0);
    // Start the session timer logic here
  };

  const handlePauseSession = () => {
    setIsSessionRunning(false);
    // Pause the session timer logic here
  };

  const handleStopSession = () => {
    setIsSessionRunning(false);
    // Stop the session timer logic here
  };

  const handleRateSession = (rating) => {
    setSessionRating(rating);
    // Save the session rating logic here
  };

  return (
    <div className="  w-100 container mx-auto max-w-md p-4">
         <nav className=" mb-4">
        <Link to="/doctor/dashboard" className="text-blue-500 hover:text-blue-700">Back</Link>
        {/* Add other navigation links or components here */}
      </nav>
      <h2 className="text-center text-2xl font-bold mb-4">Session Screen</h2>
      <div className="mb-4">
        <label className="block mb-1">Patient:</label>
        <select
          value={patient}
          onChange={(e) => setPatient(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Patient</option>
          {/* Render patient options */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Session:</label>
        <select
          value={session}
          onChange={(e) => setSession(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Session</option>
          {/* Render session options */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Sub-session:</label>
        <select
          value={subSession}
          onChange={(e) => setSubSession(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Sub-session</option>
          {/* Render sub-session options */}
        </select>
      </div>
      {!isSessionRunning ? (
        <button
          onClick={handleStartSession}
          className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 mb-4"
        >
          Start Session
        </button>
      ) : (
        <>
          <div className="text-center text-xl font-bold mb-4">Timer: {timer}</div>
          <button
            onClick={handlePauseSession}
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
          >
            Pause Session
          </button>
          <button
            onClick={handleStopSession}
            className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600 mb-4"
          >
            Stop Session
          </button>
        </>
      )}
      {sessionRating !== null && (
        <div className="mb-4">
          <label className="block mb-1">Rate the session:</label>
          <select
            value={sessionRating}
            onChange={(e) => handleRateSession(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Rating</option>
            {/* Render rating options */}
          </select>
        </div>
      )}
    </div>
  );
};

export default SessionScreen;
