// utils/time.ts
export const formatRelativeTime = (date: string | Date): string => {
  const target = new Date(date).getTime();
  const now = Date.now();

  const diffMs = now - target;

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 365 * day;

  if (diffMs < minute) {
    return "방금";
  }

  if (diffMs < hour) {
    return `${Math.floor(diffMs / minute)}분 전`;
  }

  if (diffMs < day) {
    return `${Math.floor(diffMs / hour)}시간 전`;
  }

  if (diffMs < month) {
    return `${Math.floor(diffMs / day)}일 전`;
  }

  if (diffMs < year) {
    return `${Math.floor(diffMs / month)}달 전`;
  }

  return `${Math.floor(diffMs / year)}년 전`;
};
