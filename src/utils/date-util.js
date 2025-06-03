export default function getFormattedDate(value, type, isMS) {
  if (!type) return value;
  if (!isMS) value *= 1000;
  const date = new Date(value);
  const options = {
    weekday: type === "date" ? "long" : undefined,
    year: type === "date" ? "numeric" : undefined,
    month: type === "date" ? "long" : undefined,
    day: type === "date" ? "numeric" : undefined,
    hour: type === "time" ? "2-digit" : undefined,
    minute: type === "time" ? "2-digit" : undefined,
  };
  return Intl.DateTimeFormat("en-us", options).format(date);
}
