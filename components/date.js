import { parseISO, format } from 'date-fns';

/*
 * A simple function that returns a given String as a Date inside a <time> tag
 * if the string is empty, "Unfinished is returned". The reason is because projects
 * use this function and they sometimes have no enddate property
 */
export default function Date({ dateString }) {
  if (typeof dateString === "string" && dateString.trim().length === 0) {
    return "Unfinished";
  }
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'd. LLLL, yyyy')}</time>;
}