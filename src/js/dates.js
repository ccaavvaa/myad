function roundDateUp(minutes, date) {
    let msecDate = date.valueOf();
    const r = minutes * 60000;
    msecDate = Math.ceil(msecDate / r) * r;
    const roundedDate = new Date(msecDate);
    return roundedDate;
}
export function setReleaseDateTimeForDate(outDate) {
    outDate = roundDateUp(5, outDate);
    const dateInfo = setDateNow(outDate)
    const outDateInput = document.querySelector('#field-datesortie')
    outDateInput.value = `${dateInfo.year}-${dateInfo.month}-${dateInfo.day}`

    const releaseTimeInput = document.querySelector('#field-heuresortie')
    releaseTimeInput.value = `${dateInfo.hour}:${dateInfo.minute}`
    document.getElementById("form-profile").style.display = 'inline'
    return outDate;
}
function setDateNow(date) {
    return {
        year: date.getFullYear(),
        month: pad(date.getMonth() + 1), // Les mois commencent à 0
        day: pad(date.getDate()),
        hour: pad(date.getHours()),
        minute: pad(date.getMinutes()),
    }
}
function pad(str) {
    return String(str).padStart(2, '0')
}