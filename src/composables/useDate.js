function isSameDay(timestamp) {
  const now = new Date()
  const date = new Date(timestamp)
  return date.getFullYear() == now.getFullYear() &&
  date.getMonth() == now.getMonth() &&
  date.getDate() == now.getDate()
}

function isLessThanAWeek(timestamp) {
  const now = new Date()
  const dateDiffMilliSeconds = now.valueOf() - timestamp
  const dateDiffDays = Math.floor(dateDiffMilliSeconds / (24 * 60 * 60 * 1000))
  return dateDiffDays < 7
}

function isSameYear(timestamp) {
  const now = new Date()
  const date = new Date(timestamp)
  return date.getFullYear() == now.getFullYear()
}

function getHoursMinutes(timestamp) {
  const date = new Date(timestamp)
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

function getShortWeekday(timestamp) {
  const date = new Date(timestamp)
  const options = { weekday: 'short' }
  return date.toLocaleString('en-US', options)
}

function getMonthDay(timestamp) {
  const date = new Date(timestamp)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

function getFullDate(timestamp) {
  const date = new Date(timestamp)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function displayDate(timestamp) {
    return isSameDay(timestamp) ?
        getHoursMinutes(timestamp) :
        isLessThanAWeek(timestamp) ?
        getShortWeekday(timestamp) :
        isSameYear(timestamp) ?
        getMonthDay(timestamp) :
        getFullDate(timestamp)
}
export {
    displayDate,
    getHoursMinutes,
}