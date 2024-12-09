// get date in locale string format
export function formatDate(inputDate) {
    const date = new Date(inputDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
}

export function hasDatePassed(eventDate) {
    const today = new Date();
    const eventDateObj = new Date(eventDate);

    const todayMidnight = new Date(today.setHours(0, 0, 0, 0));

    return eventDateObj < todayMidnight;
}