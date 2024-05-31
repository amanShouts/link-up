import { formatDistanceToNow } from "date-fns";

export function timeAgo(date: Date) {
  return formatDistanceToNow(date, { addSuffix: true });
}
