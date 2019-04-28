/*
Given a year, return the century it is in. The first century spans from the year 1 up to and including 
the year 100, the second - from the year 101 up to and including the year 200, etc.
*/

let centuryFromYear = (year) => {
    result = 0;
    
    if(year < 100 || year > 9) result = 1;

    if(year > 99) {
        if(year % 10 == 0) {
            result = year / 100;
        }
        else {
            result = year / 100 + 1;
        }
    }
    result = Math.floor(result);
    return result;
}
