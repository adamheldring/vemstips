function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setDate(d.getDate() + 4 - (d.getDay()||7));
    // Get first day of year
    var yearStart = new Date(d.getFullYear(),0,1);
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);

    // Return object with year and week number
    return {
      year: d.getFullYear(),
      week: weekNo
    }
}
