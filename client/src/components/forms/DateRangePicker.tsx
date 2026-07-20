import { useState } from "react";
import {format} from 'date-fns';
import { DayPicker, type DateRange } from "react-day-picker";
import { Calendar} from "lucide-react";
import "react-day-picker/style.css";

// const today = new Date();

// const todayDate =format(today, "MMM dd, yyyy")

const presets=[
    'Today', 'Yesterday', 'This Month', 'Last 7 Days', 'Last Month' 
];

function DateRangePicker(){
    const [range, setRange] = useState<DateRange | undefined>();
    return <form className="w-[50%] mx-auto bg-white">
        <div className="eleven-form-inner grid grid-cols-12 gap-2">
            <div className="eleven-form__ranges col-span-4 p-2 leading-[40px] border-solid border-r-gray-600 ">
                <strong>Instant Ranges</strong>
                <ul className="eleven-form__instant-filters">
                    {presets.map((e)=> <li key={e}><button className="cursor-pointer">{e}</button></li>)}
                </ul>
            </div>
            <div className="eleven-form__custom-ranges col-span-8 p-2">

                    <span className="fromDate"></span>

                    <div className="eleven-form__custom-input-box flex justify-between gap-2">
                        <div className="eleven-form__from w-1/2 flex flex-col gap-2">
                            <span>From</span>  
                            <span className='cursor-pointer flex items-center gap-x-1 border-[1px] border-solid border-gray-600 px-3 py-1.5 rounded-[3px] w-full'>
                                <Calendar size={15}/>
                                    {range?.from 
                                     ? format(range.from, "MMM dd, yyyy")
                                     : "Select Date"}
                            </span>
                        </div>
                        <div className="eleven-form__to w-1/2 flex flex-col gap-2">
                            <span>To</span>
                            <span className='cursor-pointer flex items-center gap-x-1 border-[1px] border-solid border-gray-600 px-3 py-1.5 rounded-[3px] w-full'>
                                <Calendar size={15}/>
                                    {range?.to
                                    ? format(range.to, "MMM dd, yyyy")
                                    : "Select Date"}
                            </span>
                        </div>
                    </div>

                    <div className="eleven-form__day-picker-box mt-2">

                        <DayPicker
                            //   classNames=
                            //   {{
                            //     root: "w-full",
                            //     month: "w-full",
                            //     month_caption: "...",
                            //     weekdays: "...",
                            //     weekday: "...",
                            //     week: "...",
                            //     day: "...",
                            //     selected: "...",
                            //     range_middle: "...",
                            //     range_start: "...",
                            //     range_end: "...",
                            //   }}
                            mode="range"
                            selected={range}
                            onSelect={setRange}
                        />

                    </div>

                
            </div>
        </div>
    </form>
}

export default DateRangePicker;