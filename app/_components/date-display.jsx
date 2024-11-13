"use client";

import { format } from "date-fns"
import { enGB } from "date-fns/locale"

const DateDisplay = () => {
    return (
        <p className="text-xs text-green-900">
            {format(new Date(), "EEEE, d MMMM yyyy", { locale: enGB })}
        </p>
    );
}
 
export default DateDisplay;