// Availability logic for Los Angeles: business window, Sabbath
// (Friday sunset → Saturday sunset), and the local clock.
// Pure functions, no network — sunset comes from the classic
// Almanac for Computers (1990) algorithm at LA's coordinates.

const LA_LAT = 34.0522;
const LA_LNG = -118.2437;

// Availability window in Los Angeles local hours (Mon–Fri)
export const UPLINK_START = 8;
export const UPLINK_END = 18;

// Sunset (official zenith) for a Los Angeles calendar date, in hours UTC.
export function sunsetUTCHours(y, m, d) {
  const D2R = Math.PI / 180;
  const R2D = 180 / Math.PI;

  const N = Math.floor((Date.UTC(y, m - 1, d) - Date.UTC(y, 0, 1)) / 86400000) + 1;
  const lngHour = LA_LNG / 15;
  const t = N + (18 - lngHour) / 24;

  const M = 0.9856 * t - 3.289;
  let L = M + 1.916 * Math.sin(M * D2R) + 0.02 * Math.sin(2 * M * D2R) + 282.634;
  L = ((L % 360) + 360) % 360;

  let RA = R2D * Math.atan(0.91764 * Math.tan(L * D2R));
  RA = ((RA % 360) + 360) % 360;
  RA += Math.floor(L / 90) * 90 - Math.floor(RA / 90) * 90;
  RA /= 15;

  const sinDec = 0.39782 * Math.sin(L * D2R);
  const cosDec = Math.cos(Math.asin(sinDec));
  const cosH =
    (Math.cos(90.833333 * D2R) - sinDec * Math.sin(LA_LAT * D2R)) /
    (cosDec * Math.cos(LA_LAT * D2R));
  if (cosH > 1 || cosH < -1) return null; // never happens at LA's latitude

  const H = (R2D * Math.acos(cosH)) / 15;
  const T = H + RA - 0.06571 * t - 6.622;
  return (((T - lngHour) % 24) + 24) % 24;
}

// Current Los Angeles availability.
// Returns { mode: 'uplink' | 'sabbath' | 'async', time, weekday, laHour }.
export function getLAStatus(now = new Date()) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Los_Angeles",
      hourCycle: "h23",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "short",
    })
      .formatToParts(now)
      .map((p) => [p.type, p.value])
  );

  const laHour = parseInt(parts.hour, 10);
  const laMinutes = laHour * 60 + parseInt(parts.minute, 10);
  const utcMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
  const offsetMinutes = (((utcMinutes - laMinutes) % 1440) + 1440) % 1440;

  const sunsetUTC = sunsetUTCHours(
    parseInt(parts.year, 10),
    parseInt(parts.month, 10),
    parseInt(parts.day, 10)
  );
  const sunsetLAMinutes =
    sunsetUTC === null
      ? null
      : (((Math.round(sunsetUTC * 60) - offsetMinutes) % 1440) + 1440) % 1440;

  // Sabbath: Friday sunset → Saturday sunset (Los Angeles time)
  const isSabbath =
    sunsetLAMinutes !== null &&
    ((parts.weekday === "Fri" && laMinutes >= sunsetLAMinutes) ||
      (parts.weekday === "Sat" && laMinutes < sunsetLAMinutes));

  const isWeekday = !["Sat", "Sun"].includes(parts.weekday);
  const inWindow = laHour >= UPLINK_START && laHour < UPLINK_END;

  return {
    mode: isSabbath ? "sabbath" : isWeekday && inWindow ? "uplink" : "async",
    time: `${parts.hour}:${parts.minute}:${parts.second}`,
    weekday: parts.weekday,
    laHour,
  };
}
