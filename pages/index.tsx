import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function triggerGoogleCalendar() {
  // Generating urls, see: https://www.labnol.org/calendar/
  // and: https://support.google.com/calendar/thread/128416249/calendar-url-generator-which-parameters?hl=en
  const url =
    "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20231114T091500Z%2F20231114T094500Z&details=-%20Lorem%20ipsum%0A-%20Lorem%20ipsum%0A-%20https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Fu%2F0%2Fr&location=Warsaw&text=Example%20event";

  window.open(url, "_blank")?.focus();
}

function triggerMsOutlook() {
  // Generating urls, see: https://www.labnol.org/calendar/
  // and: https://interactiondesignfoundation.github.io/add-event-to-calendar-docs/services/outlook-web.html
  const url =
    "https://outlook.live.com/calendar/0/action/compose?allday=false&body=-%20Lorem%20ipsum%0A-%20Lorem%20ipsum%0A-%20https%3A%2F%2Fcalendar.google.com%2Fcalendar%2Fu%2F0%2Fr&enddt=2023-11-14T09%3A45%3A00%2B00%3A00&location=Warsaw&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2023-11-14T09%3A15%3A00%2B00%3A00&subject=Example%20event";

  window.open(url, "_blank")?.focus();
}

function triggerIcsFile() {
  // See: https://www.npmjs.com/package/ical-generator
  // or: https://www.npmjs.com/package/ics
  const icalContent =
    "BEGIN:VCALENDAR\n" +
    "VERSION:2.0\n" +
    "BEGIN:VEVENT\n" +
    "SUMMARY:Event Title\n" +
    "DTSTART:20230101T100000Z\n" +
    "DTEND:20230101T120000Z\n" +
    "LOCATION:Event Location\n" +
    "END:VEVENT\n" +
    "END:VCALENDAR";

  const blob = new Blob([icalContent], { type: "text/calendar" });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "event.ics";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export default function Home() {
  return (
    <main
      className={`${inter.className} flex min-h-screen flex-col items-start justify-start p-12 gap-2`}
    >
      <h1 className="text-xl font-semibold">Add to calendar</h1>
      <button
        className="border border-slate-500 px-2 py-1 hover:bg-slate-100 rounded"
        onClick={triggerGoogleCalendar}
      >
        Google Calendar
      </button>
      <button
        className="border border-slate-500 px-2 py-1 hover:bg-slate-100 rounded"
        onClick={triggerMsOutlook}
      >
        MS Outlook
      </button>
      <button
        className="border border-slate-500 px-2 py-1 hover:bg-slate-100 rounded"
        onClick={triggerIcsFile}
      >
        iCal (.ics file)
      </button>
    </main>
  );
}
