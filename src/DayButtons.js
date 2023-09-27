
function DayButton({ value }){
    return <button className="day-button">{value}</button>; 
}

export default function CallendarPage(){
    return (
    <>
    <div className="calendar-row">
     <DayButton value="1" />
     <DayButton value="2" />
     <DayButton value="3" />
     <DayButton value="4" />     
     </div>

    <div className="calendar-row">
     <DayButton value="5" />
     <DayButton value="6" />
     <DayButton value="7" />
     <DayButton value="8" />     
     </div>

    <div className="calendar-row">
     <DayButton value="9" />
     <DayButton value="10" />
     <DayButton value="11" />
     <DayButton value="12" />     
     </div>

    <div className="calendar-row">
     <DayButton value="13" />
     <DayButton value="14" />
     <DayButton value="15" />
     <DayButton value="16" />     
     </div>

    <div className="calendar-row">
     <DayButton value="17" />
     <DayButton value="18" />
     <DayButton value="19" />
     <DayButton value="20" />     
     </div>

    <div className="calendar-row">
     <DayButton value="21" />
     <DayButton value="22" />
     <DayButton value="23" />
     <DayButton value="24" />     
     </div>
    </>
    );
}