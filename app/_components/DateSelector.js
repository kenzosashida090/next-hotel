"use client"
import { isWithinInterval, differenceInDays, isPast, isToday} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./datestyle.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({settings, bookedDates, cabin}) {
const {range,setRange, resetRange} = useReservation()
  // CHANGE
  const {regular_price, discount} = cabin;
  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range
  const num_nights = differenceInDays(displayRange.to, displayRange.from)
  const cabin_price = num_nights * (regular_price - discount)
  // SETTINGS
  const {minBookingLength, maxBookingLength} = settings;
  return (
    <div className="flex flex-col">
      <DayPicker
        className="pt-12 place-self-center "
        mode="range"
        selected={displayRange}
        defaultMonth={new Date()} // Para establecer el mes inicial mostrado
        numberOfMonths={2} // Muestra dos meses
        captionLayout="dropdown" // Si sigue disponible en la versión usada
	  onSelect={(range)=>{
      if(!range) return
      setRange(range)}}
	disabled={(curDate)=> isPast(curDate) || bookedDates.some((date)=> isToday(date, curDate))}
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 mt-2 text-primary-800 h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regular_price - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regular_price}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regular_price}</span>
            )}
            <span className="">/night</span>
          </p>
          {num_nights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{num_nights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${cabin_price}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={() => resetRange()}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
