export const WEEKLY_MIN = 1500;
export const WEEKLY_MAX = 2500;
export const BASELINE_DAYS = 5;

export function calculateEarnings(daysPerWeek: number, weeklyTarget: number) {
  const clampedDays = Math.min(7, Math.max(1, daysPerWeek));
  const clampedTarget = Math.min(WEEKLY_MAX, Math.max(WEEKLY_MIN, weeklyTarget));

  const weekly = Math.min(
    WEEKLY_MAX,
    Math.round(clampedTarget * (clampedDays / BASELINE_DAYS)),
  );

  const monthly = Math.round(weekly * 4.33);
  const annual = Math.round(weekly * 52);

  return { weekly, monthly, annual, daysPerWeek: clampedDays, weeklyTarget: clampedTarget };
}

export function formatUsd(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
