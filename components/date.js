import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  if (typeof dateString === "string" && dateString.trim().length === 0) {
    return "Unfinished";
  }
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}