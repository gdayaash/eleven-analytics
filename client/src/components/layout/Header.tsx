import {format} from 'date-fns';
import { useState } from 'react';
import { Bell, CircleUser, Calendar, ChevronDown } from "lucide-react";
// import DatePicker from '@/components/ui/DatePicker';



const today = new Date();

const todayDate =format(today, "MMM dd, yyyy")

function Header() {

  const [open, setOpen] = useState(false);

  function handleDatePicker(prev:boolean){
    console.log(prev)
    setOpen(prev=> !prev)

}
  
  return (
    <header className="eleven-header px-2 py-4 w-max">
      <nav className="eleven-header__nav flex items-center gap-x-5">
        <div className="eleven-header__client">
          <div className="eleven-header__client-name flex items-center">
            <span className="eleven-header__client-name-text border-[1.5px] border-solid border-gray-300 rounded-sm py-1 px-1.5 bg-transparent m-2">--Client--Name--</span>
            <span className="text-[24px]">|</span>
          </div>
        </div>  
        <div className="eleven-header__navigation">
          <ul className="eleven-header__nav-items flex items-center gap-x-3">
            <li className="eleven-header__nav-item">Global View</li>
            <li className="eleven-header__nav-item">Department</li>
            <li className="eleven-header__nav-item">Individual</li>
          </ul>
        </div>
        <div className="eleven-header__actions">
          <ul className="eleven-header__actions-items flex items-center gap-x-3">
            <li className="eleven-header-actions-item">
              <DatePickerBtn handleDatePicker={handleDatePicker} open={open} />
            </li>
            <li className="eleven-header-actions-item">
              <ExportBtn />
            </li>
            <li className="eleven-header-actions-item flex items-center gap-x-2">
              <Bell size={18} />
              <CircleUser className='cursor-pointer' size={20}/>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

interface DatePickerBtnProps {
  open: boolean;
  handleDatePicker: (prev: boolean) => void;
}

function DatePickerBtn({handleDatePicker, open}:DatePickerBtnProps){
  return(
    <span className='cursor-pointer flex items-center gap-x-1 border-[2px] border-dotted border-gray-600 px-1.5' onClick={()=> handleDatePicker(open)}>
    <Calendar size={15}/>
    {todayDate}
    <ChevronDown size={14} />
  </span>
  )
}

function ExportBtn(){
  return <button className='cursor-pointer' onClick={()=> console.log("Export Btn Clicked")}>Export Report</button>
}


export default Header;
