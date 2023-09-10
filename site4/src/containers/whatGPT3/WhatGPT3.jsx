import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

// Define the timetable data as a two-dimensional array
const timetableData = [
  // Monday
  [
    { time: '06:00 AM - 07:00 AM', text: 'BJJ - Open Class' },
    { time: '12:00 PM - 01:30 PM', text: 'BJJ - Open Class' },
    { time: '04:00 PM - 05:00 PM', text: 'Kids Class' },
    { time: '05:00 PM - 06:00 PM', text: 'Junior Class' },
    { time: '06:00 PM - 07:30 PM', text: 'BJJ - Open Class' },
    { time: '07:30 PM - 08:00 PM', text: 'BJJ - WB Class' },
    // Add more time slots for Monday as needed
  ],
  // Tuesday
  [
    { time: '5:00 PM - 6:30 PM', text: 'BJJ Rounds' },
    { time: '11:00 AM - 12:00 PM', text: 'MMA Striking' },
    // Add more time slots for Tuesday as needed
  ],
  // Wednesday
  [
    { time: '06:00 AM - 07:00 AM', text: 'BJJ - Open Class' },
    { time: '11:00 AM - 12:00 PM', text: 'MMA Striking' },
    { time: '12:00 PM - 01:30 PM', text: 'BJJ - Open Class' },
    { time: '04:00 PM - 05:00 PM', text: 'Kids Class' },
    { time: '05:00 PM - 06:00 PM', text: 'Junior Class' },
    { time: '06:00 PM - 07:30 PM', text: 'BJJ - Open Class' },
    { time: '07:30 PM - 08:00 PM', text: 'BJJ - WB Class' },
    // Add more time slots for Wednesday as needed

  ],
  // Thursday
  [
    { time: '5:00 PM - 6:30 PM', text: 'BJJ Rounds' },
    { time: '11:00 AM - 12:00 PM', text: 'MMA Striking' },
    // Add more time slots for Thursday as needed
  ],
  // Friday
  [
    { time: '06:00 AM - 07:00 AM', text: 'BJJ - Open Class' },
    { time: '11:00 AM - 12:00 PM', text: 'MMA Striking' },
    { time: '12:00 PM - 01:30 PM', text: 'BJJ - Open Class' },
    { time: '04:00 PM - 05:00 PM', text: 'Kids Class' },
    { time: '05:00 PM - 06:00 PM', text: 'Junior Class' },
    { time: '06:00 PM - 07:30 PM', text: 'BJJ - Open Class' },
    { time: '07:30 PM - 08:00 PM', text: 'BJJ - WB Class' },
    // Add more time slots for Friday as needed
  ],
  // Saturday
  [
    { time: '04:00 PM - 05:00 PM', text: 'Kids Class' },
    { time: '05:00 PM - 06:00 PM', text: 'Junior Class' },
    { time: '06:00 PM - 07:30 PM', text: 'BJJ - Open Class' },
    { time: '11:00 AM - 12:00 PM', text: 'MMA Striking' },
    // Add more time slots for Saturday as needed
  ],
  // Sunday
  [
    { time: '06:00 AM - 07:30 PM', text: 'NO CLASS' },
    // Add more time slots for Sunday as needed
  ],
];

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Timetable" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <table className="timetable">
        <thead>
          <tr>
            <th>Time</th>
            {daysOfWeek.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timetableData[0].map((_, slotIndex) => (
            <tr key={slotIndex}>
              <td>{timetableData[0][slotIndex].time}</td>
              {timetableData.map((dayData, dayIndex) => (
                <td key={dayIndex}>
                  {dayData[slotIndex] ? dayData[slotIndex].text : ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default WhatGPT3;
