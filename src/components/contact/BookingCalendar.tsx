import React from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '../common/Button';
import { Popover } from '@radix-ui/react-popover';

const disabledDays = [
  new Date(2024, 2, 15),
  new Date(2024, 2, 16),
  new Date(2024, 2, 20),
  { from: new Date(2024, 2, 25), to: new Date(2024, 2, 28) },
];

const availableTimeSlots = [
  '09:00 AM',
  '11:00 AM',
  '02:00 PM',
  '04:00 PM',
];

export function BookingCalendar() {
  const [selectedDate, setSelectedDate] = React.useState<Date>();
  const [selectedTime, setSelectedTime] = React.useState<string>();

  const footer = selectedDate ? (
    <p className="mt-4 text-sm text-gray-400">
      Available times for {format(selectedDate, 'PPP')}:
    </p>
  ) : (
    <p className="mt-4 text-sm text-gray-400">
      Please pick a date.
    </p>
  );

  return (
    <div className="bg-zinc-900/50 p-8 rounded-xl backdrop-blur-sm">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            disabled={disabledDays}
            footer={footer}
            fromDate={new Date()}
            className="bg-zinc-800 p-4 rounded-lg"
            classNames={{
              months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
              month: "space-y-4",
              caption: "flex justify-center pt-1 relative items-center",
              caption_label: "text-sm font-medium text-gray-100",
              nav: "space-x-1 flex items-center",
              nav_button: "h-7 w-7 bg-zinc-700 hover:bg-zinc-600 rounded-md flex items-center justify-center",
              nav_button_previous: "absolute left-1",
              nav_button_next: "absolute right-1",
              table: "w-full border-collapse space-y-1",
              head_row: "flex",
              head_cell: "text-zinc-400 rounded-md w-9 font-normal text-[0.8rem]",
              row: "flex w-full mt-2",
              cell: "text-center text-sm relative p-0 rounded-md focus-within:relative focus-within:z-20",
              day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-gold-500/20",
              day_selected: "bg-gold-500 text-black hover:bg-gold-600 hover:text-black focus:bg-gold-500 focus:text-black",
              day_today: "bg-zinc-700 text-white",
              day_outside: "text-zinc-600 opacity-50",
              day_disabled: "text-zinc-600 opacity-50 bg-zinc-800/50 hover:bg-zinc-800/50",
              day_range_middle: "aria-selected:bg-zinc-700 aria-selected:text-gray-100",
              day_hidden: "invisible",
            }}
          />
        </div>

        {selectedDate && (
          <div className="flex-1 space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">Available Time Slots</h3>
            <div className="grid grid-cols-2 gap-4">
              {availableTimeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? 'primary' : 'secondary'}
                  onClick={() => setSelectedTime(time)}
                  className="w-full"
                >
                  {time}
                </Button>
              ))}
            </div>

            {selectedTime && (
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-white">Selected Slot</h4>
                <p className="text-gray-400">
                  {format(selectedDate, 'PPP')} at {selectedTime}
                </p>
                <Button variant="primary" className="w-full">
                  Confirm Booking
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}