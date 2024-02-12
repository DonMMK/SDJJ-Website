/* eslint-disable radix */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-plusplus */
import React from 'react';
import './whatGPT3.css'; // Import your CSS file for styling
import Feature from '../../components/feature/Feature';
import classTimetable from '../../assets/sdjj_pictures/ClassTimetable.jpg';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    {/* <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
    </div> */}
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Find a class that interests you</h1>
      {/* <p>Explore the Library</p> */}
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Kids and Junior Class" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="BJJ Class" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="MMA Striking" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Competition Training" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
    </div>
    <div className="image__container">
      <img src={classTimetable} alt="sdjj_logo" />
    </div>
  </div>
);

// const classes = {
//   Monday: [
//     { startTime: '6:00am', endTime: '7:00am', className: 'BJJ class' },
//     { startTime: '12:00pm', endTime: '1:30pm', className: 'BJJ class' },
//     { startTime: '4:00pm', endTime: '4:40pm', className: 'kids class' },
//     { startTime: '4:30pm', endTime: '5:30pm', className: 'junior class' },
//     { startTime: '6:00pm', endTime: '7:00pm', className: 'BJJ class' },
//   ],
//   Tuesday: [
//     { startTime: '5:40pm', endTime: '7:00pm', className: 'rolling and sparring' },
//     { startTime: '7:00pm', endTime: '8:00pm', className: 'mma striking' },
//   ],
//   Wednesday: [
//     { startTime: '6:00am', endTime: '7:00am', className: 'BJJ class' },
//     { startTime: '12:00pm', endTime: '1:30pm', className: 'BJJ class' },
//     { startTime: '4:00pm', endTime: '4:40pm', className: 'kids class' },
//     { startTime: '4:30pm', endTime: '5:30pm', className: 'junior class' },
//     { startTime: '6:00pm', endTime: '7:00pm', className: 'BJJ class' },
//   ],
//   Thursday: [
//     { startTime: '5:40pm', endTime: '7:00pm', className: 'rolling and sparring' },
//     { startTime: '7:00pm', endTime: '8:00pm', className: 'mma striking' },
//   ],
//   Friday: [
//     { startTime: '6:00am', endTime: '7:00am', className: 'BJJ class' },
//     { startTime: '12:00pm', endTime: '1:30pm', className: 'BJJ class' },
//     { startTime: '4:00pm', endTime: '4:40pm', className: 'kids class' },
//     { startTime: '4:30pm', endTime: '5:30pm', className: 'junior class' },
//     { startTime: '5:30pm', endTime: '6:30pm', className: 'competition training' },
//   ],
//   Saturday: [
//     { startTime: '9:00am', endTime: '10:00am', className: 'kids class' },
//     { startTime: '10:00am', endTime: '11:00am', className: 'junior class' },
//     { startTime: '10:00am', endTime: '12:00pm', className: 'BJJ class' },
//   ],
//   Sunday: [],
// };

// const Timetable = () => {
//   const timeSlots = [
//     '6:00am',
//     '7:00am',
//     '8:00am',
//     '9:00am',
//     '10:00am',
//     '11:00am',
//     '12:00pm',
//     '1:00pm',
//     '2:00pm',
//     '3:00pm',
//     '4:00pm',
//     '5:00pm',
//     '6:00pm',
//     '7:00pm',
//     '8:00pm',
//     '9:00pm',
//   ];

//   return (
//     <div className="timetable">
//       <table>
//         <thead>
//           <tr>
//             <th>Time</th>
//             <th>Monday</th>
//             <th>Tuesday</th>
//             <th>Wednesday</th>
//             <th>Thursday</th>
//             <th>Friday</th>
//             <th>Saturday</th>
//             <th>Sunday</th>
//           </tr>
//         </thead>
//         <tbody>
//           {timeSlots.map((timeSlot) => (
//             <tr key={timeSlot}>
//               <td>{timeSlot}</td>
//               {Object.keys(classes).map((day) => {
//                 const classInfo = classes[day].find(
//                   (c) => new Date(`2000-01-01T${c.startTime}`).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }) <= timeSlot
//                     && new Date(`2000-01-01T${c.endTime}`).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true }) > timeSlot,
//                 );
//                 return (
//                   <td key={day} className={classInfo ? classInfo.className : 'empty'}>
//                     {classInfo ? classInfo.className : ''}
//                   </td>
//                 );
//               })}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

export default WhatGPT3;
