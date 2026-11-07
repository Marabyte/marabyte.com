const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const ORDINALS: Record<number, string> = { 1: 'st', 2: 'nd', 3: 'rd', 21: 'st', 22: 'nd', 23: 'rd', 31: 'st' };

/** "October 2nd 2020". Uses UTC so the output doesn't depend on the build machine's timezone. */
export function formatDate(date: Date): string {
  const day = date.getUTCDate();
  return `${MONTHS[date.getUTCMonth()]} ${day}${ORDINALS[day] ?? 'th'} ${date.getUTCFullYear()}`;
}
