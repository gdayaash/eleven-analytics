import { DayPicker } from "react-day-picker";
import { useState } from "react";
import { DayPicker, type DateRange } from "react-day-picker";

const presets=[
    'Today', 'Yesterday', 'This Month', 'Last 7 Days', 'Last Month' 
];

function DateRangePicker(){
    const [range, setRange] = useState<DateRange | undefined>();
    return <form className=" w-[50%] mx-auto bg-white">
        <div className="eleven-form-inner grid grid-cols-12 gap-2">
            <div className="eleven-form__ranges col-span-4 p-2 leading-[40px] border-solid border-r-gray-600 ">
                <strong>Instant Ranges</strong>
                <ul className="eleven-form__instant-filters">
                    {presets.map((e)=> <li>{e}</li>)}
                </ul>
            </div>
            <div className="eleven-form__custom-ranges col-span-8 p-2">
                <label htmlFor="from">From</label>
                <span className="fromDate"></span>
                <DayPicker
                    mode="range"
                    selected={range}
                    onSelect={setRange}
                />
                
            </div>
        </div>
    </form>
}

export default DateRangePicker;