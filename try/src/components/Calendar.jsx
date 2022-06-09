import React from 'react'
import { Link } from 'react-router-dom';
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';
import '../App.css'


export default function Calendar() {
  return (
    <div>
      <div className="flex">
        <div className="mb-4">
          Calander
        </div>
    <CalendarComponent>

    </CalendarComponent>
      </div>
    <Link to="/">Home</Link>
    </div>
  )
}
