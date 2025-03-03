import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalendar'
import React from 'react'

const TeacherPage = () => {
  return (
    <div className='flex flex-1 flex-col xl:flex-row p-4 gap-4'>
      {/* LEFT */}
      <div className='w-full xl:w-2/3'>
        <div className='w-full bg-white p-4 rounded-md'>
          <h1 className='text-xl font-semibold'>Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className='flex flex-col w-full xl:w-1/3 gap-8'>
        <Announcements />
      </div>
    </div>
  )
}

export default TeacherPage