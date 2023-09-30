import React, { useState } from 'react';


const days = [{ dayNo: "1" },
{ dayNo: "2" },
{ dayNo: "3" },
{ dayNo: "4" },
{ dayNo: "5" },
{ dayNo: "6" },
{ dayNo: "7" },
{ dayNo: "8" },
{ dayNo: "9" },
{ dayNo: "10" },
{ dayNo: "11" },
{ dayNo: "12" },
{ dayNo: "13" },
{ dayNo: "14" },
{ dayNo: "15" },
{ dayNo: "16" },
{ dayNo: "17" },
{ dayNo: "18" },
{ dayNo: "19" },
{ dayNo: "20" },
{ dayNo: "21" },
{ dayNo: "22" },
{ dayNo: "23" },
{ dayNo: "24" }
];


function DayButton() {

// added OnClick event handler to each button
// button passes the dayNo value as a parameter to the handleButtonClick function where we update the state of DayContent
//Finally we conditionally render a window displaying content based on the DayContent state 


const [DayContent, setDayContent] = useState(false);

const handleButtonClick = (dayContentNo) => {
    setDayContent(dayContentNo);
}

    return (
      <div>
        {days.map((el, key) => {
          return <button onClick={() => handleButtonClick(el.dayNo)} key={key}>{el.dayNo}</button>;
        })}
        {DayContent && (
        <div className='popup-content'>{DayContent}</div>
        )}
        </div>
    );
  }


export default DayButton;