function leapYear(date){
    let year;
    let result;
    if (typeof(date) === 'number'||typeof(date) === 'string') {
        year = (new Date(date)).getFullYear();
    }
    if (year) {
        if (year%4 === 0){
            result = (year + 'is a leap year');
        } else if (year%400 === 0) {
            result = (year + 'is a leap year');
        } else if (year%100 === 0){
            result = (year + 'is not a leap year');
        } else {
            result = (year + 'is not a leap year');
        }
    }
    return result;
}


leapYear('2023-01-01 00:00:00');
