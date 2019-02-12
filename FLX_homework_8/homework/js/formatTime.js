function formatTime(minutes) {
    let daysAmount = Math.floor(minutes / 1440);
    let hoursAmount = Math.floor((minutes - (daysAmount * 1440)) / 60);
    let minutesAmount = minutes - (daysAmount * 1440) - (hoursAmount *60); 
    return daysAmount + ' day(s) ' + hoursAmount + ' hour(s) ' + minutesAmount + ' minute(s).';

}
formatTime(120); //=> 0 day(s) 2 hour(s) 0 minute(s).
formatTime(59); //=> 0 day(s) 0 hour(s) 59 minute(s).
formatTime(3601); //=> 1 day(s) 0 hour(s) 1 minute(s).


