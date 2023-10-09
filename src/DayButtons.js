import React, { useState } from 'react';
import GameType1 from './GameType1';


const days = [
  {
    dayNo: "1",
    content: <GameType1 imgSource={require('./img/image-1.jpg')}/>
  },
  {
    dayNo: "2",
    content: "test2"
  },
  {
    dayNo: "3",
    content: "test3"
  },
  {
    dayNo: "4",
    content: "test4"
  },
  {
    dayNo: "5",
    content: "test5"
  },
  {
    dayNo: "6",
    content: "test6"
  },
  {
    dayNo: "7",
    content: "test7"
  },
  {
    dayNo: "8",
    content: "test8"
  },
  {
    dayNo: "9",
    content: "test9"
  },
  {
    dayNo: "10",
    content: "test10"
  },
  {
    dayNo: "11",
    content: "test11"
  },
  {
    dayNo: "12",
    content: "test12"
  },
  {
    dayNo: "13",
    content: "test13"
  },
  {
    dayNo: "14",
    content: "test14"
  },
  {
    dayNo: "15",
    content: "test15"
  },
  {
    dayNo: "16",
    content: "test16"
  },
  {
    dayNo: "17",
    content: "test17"
  },
  {
    dayNo: "18",
    content: "test18"
  },
  {
    dayNo: "19",
    content: "test19"
  },
  {
    dayNo: "20",
    content: "test20"
  },
  {
    dayNo: "21",
    content: "test21"
  },
  {
    dayNo: "22",
    content: "test22"
  },
  {
    dayNo: "23",
    content: "test23"
  },
  {
    dayNo: "24",
    content: "test24"
  }
];


function DayButton() {

  // added OnClick event handler to each button
  // button passes the dayNo value as a parameter to the handleButtonClick function where we update the state of DayContent
  //Finally we conditionally render a window displaying content based on the DayContent state 
  const [dayContent, setDayContent] = useState(false);

  const handleButtonClick = (dayContentNo) => {
    setDayContent(dayContentNo);
  }

  return (
    <div>
      <div className='day-windows'>
        {days.map((el, key) => {
          return <button onClick={() => handleButtonClick(el.dayNo)} key={key}>{el.dayNo}</button>;
        })}
      </div>

      <div className='day-content'>
        {dayContent && (
          <div className='popup-content'>{days[dayContent - 1].content}
            <button onClick={() => setDayContent(false)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}


export default DayButton;