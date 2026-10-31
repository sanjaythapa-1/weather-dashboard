import {
  Cloud,
  CloudRain,
  CloudSun,
  Droplets,
  Gauge,
  Heart,
  MapPin,
  Moon,
  Search,
  Sun,
  Wind,
  Sunrise,
  Sunset,
  Eye,
  Navigation,
  LayoutDashboard,
  Clock,
  Settings,
  Star,
  Thermometer,
  RefreshCw,
} from "lucide-react";
import SectionTitle from "@/components/ui/section-title";
import WeatherDetails from "@/components/weather/weather-details";

const hourlyForecast = [
  { time: "Now", temp: 18, icon: CloudSun },
  { time: "12 PM", temp: 20, icon: Sun },
  { time: "1 PM", temp: 22, icon: Sun },
  { time: "2 PM", temp: 21, icon: CloudSun },
  { time: "3 PM", temp: 19, icon: Cloud },
  { time: "4 PM", temp: 18, icon: CloudSun },
  { time: "5 PM", temp: 16, icon: Moon },
];

const weeklyForecast = [
  {
    day: "Today",
    condition: "Partly cloudy",
    high: 22,
    low: 14,
    icon: CloudSun,
  },
  { day: "Wed", condition: "Sunny", high: 24, low: 15, icon: Sun },
  { day: "Thu", condition: "Light rain", high: 19, low: 13, icon: CloudRain },
  { day: "Fri", condition: "Cloudy", high: 20, low: 12, icon: Cloud },
  { day: "Sat", condition: "Sunny", high: 25, low: 16, icon: Sun },
  { day: "Sun", condition: "Partly cloudy", high: 23, low: 15, icon: CloudSun },
  { day: "Mon", condition: "Light rain", high: 18, low: 12, icon: CloudRain },
];

const weatherDetails = [
  { label: "Feels like", value: "17°C", icon: Thermometer },
  { label: "Humidity", value: "62%", icon: Droplets },
  { label: "Wind speed", value: "12 km/h", icon: Wind },
  { label: "Visibility", value: "10 km", icon: Eye },
  { label: "Pressure", value: "1012 hPa", icon: Gauge },
  { label: "UV index", value: "5 Moderate", icon: Sun },
];

const recentCities = [
  { city: "London", country: "United Kingdom", temp: "14°", icon: Cloud },
  { city: "Tokyo", country: "Japan", temp: "21°", icon: Sun },
  { city: "New York", country: "United States", temp: "17°", icon: CloudSun },
];

function DetailCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.035] p-4">
      <div className="mb-3 flex items-center gap-2 text-slate-400">
        <Icon size={17} className="text-blue-400" />
        <span className="text-xs">{label}</span>
      </div>

      <p className="text-lg font-semibold text-white">{value}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b1220] text-white">
      <div className="mx-auto flex min-h-screen max-w-[1600px]">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 flex-col border-r border-white/10 bg-[#0e1728] p-6 lg:flex">
          <div className="mb-12 flex items-center gap-3">
            <div className="rounded-xl bg-blue-500/15 p-2">
              <CloudSun size={30} className="text-blue-400" />
            </div>

            <h1 className="text-xl font-bold tracking-tight">
              Weather<span className="text-blue-400">Now</span>
            </h1>
          </div>

          <nav className="space-y-2">
            {[
              { label: "Dashboard", icon: LayoutDashboard, active: true },
              { label: "Forecast", icon: CloudSun, active: false },
              { label: "Favorites", icon: Heart, active: false },
              { label: "Recent searches", icon: Clock, active: false },
              { label: "Settings", icon: Settings, active: false },
            ].map(({ label, icon: Icon, active }) => (
              <button
                key={label}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                  active
                    ? "bg-blue-500/15 font-medium text-blue-400"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={19} />
                {label}
              </button>
            ))}
          </nav>

          <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-3 flex items-center gap-2">
              <Sun size={20} className="text-yellow-400" />
              <span className="text-sm font-medium">Weather tip</span>
            </div>

            <p className="text-xs leading-6 text-slate-400">
              Check the forecast before heading out. A little preparation makes
              every day better.
            </p>
          </div>

          <p className="mt-6 text-center text-xs text-slate-600">
            WeatherNow · Your daily forecast
          </p>
        </aside>

        {/* Main content */}
        <div className="min-w-0 flex-1">
          {/* Header */}
          <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-[#0b1220]/95 px-5 py-4 backdrop-blur-xl md:px-8">
            <div className="relative w-full max-w-md">
              <Search
                size={19}
                className="absolute top-1/2 left-4 -translate-y-1/2 text-slate-500"
              />

              <input
                type="search"
                placeholder="Search for a city..."
                aria-label="Search for a city"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pr-4 pl-11 text-sm outline-none transition placeholder:text-slate-500 focus:border-blue-500"
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden text-right sm:block">
                <p className="text-xs text-slate-500">Current location</p>
                <p className="mt-1 flex items-center gap-1 text-sm font-medium">
                  <MapPin size={14} className="text-blue-400" />
                  Kathmandu, Nepal
                </p>
              </div>

              <button
                aria-label="Refresh weather"
                className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                <RefreshCw size={18} />
              </button>
            </div>
          </header>

          {/* Dashboard grid */}
          <div className="grid grid-cols-1 gap-6 p-5 md:p-8 xl:grid-cols-[minmax(0,1.65fr)_minmax(320px,1fr)]">
            {/* Left column */}
            <div className="min-w-0 space-y-6">
              {/* Current weather */}
              <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#173b70] via-[#142846] to-[#111b2e] p-6 md:p-8">
                <div className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />
                <div className="pointer-events-none absolute right-12 bottom-0 h-32 w-32 rounded-full bg-indigo-400/10 blur-3xl" />

                <div className="relative">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <MapPin size={18} className="text-blue-400" />
                        <span className="text-sm">Current weather</span>
                      </div>

                      <h2 className="mt-2 text-2xl font-bold">Kathmandu</h2>

                      <p className="mt-1 text-sm text-slate-400">
                        Bagmati Province, Nepal
                      </p>
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
                      Wednesday, October 28
                    </span>
                  </div>

                  <div className="my-9 flex flex-wrap items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                      <CloudSun
                        size={88}
                        strokeWidth={1.2}
                        className="text-yellow-300"
                      />

                      <div>
                        <div className="flex items-start">
                          <span className="text-7xl font-semibold tracking-tighter md:text-8xl">
                            18
                          </span>
                          <span className="mt-2 text-3xl text-slate-300">
                            °C
                          </span>
                        </div>

                        <p className="mt-2 text-lg font-medium">
                          Partly cloudy
                        </p>

                        <p className="mt-1 text-sm text-slate-400">
                          H: 22° &nbsp; L: 14°
                        </p>
                      </div>
                    </div>

                    <div className="hidden rounded-2xl border border-white/10 bg-black/10 p-4 sm:block">
                      <Sunrise size={25} className="mb-2 text-yellow-300" />
                      <p className="text-xs text-slate-400">Sunrise</p>
                      <p className="mt-1 font-semibold">6:12 AM</p>

                      <div className="my-4 border-t border-white/10" />

                      <Sunset size={25} className="mb-2 text-orange-300" />
                      <p className="text-xs text-slate-400">Sunset</p>
                      <p className="mt-1 font-semibold">5:25 PM</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-5 sm:grid-cols-4">
                    {[
                      { label: "Feels like", value: "17°C", icon: Thermometer },
                      { label: "Humidity", value: "62%", icon: Droplets },
                      { label: "Wind speed", value: "12 km/h", icon: Wind },
                      { label: "UV index", value: "5 Moderate", icon: Sun },
                    ].map(({ label, value, icon: Icon }) => (
                      <div key={label} className="flex items-start gap-2">
                        <Icon
                          size={18}
                          className="mt-0.5 shrink-0 text-blue-300"
                        />
                        <div>
                          <p className="text-xs text-slate-400">{label}</p>
                          <p className="mt-1 text-sm font-semibold">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Hourly forecast */}
              <section className="rounded-2xl border border-white/10 bg-[#111c2e] p-5 md:p-6">
                <div className="mb-6 flex items-center justify-between gap-3">
                  <SectionTitle title="Hourly forecast" icon={Clock} />

                  <button className="mb-5 shrink-0 text-xs text-blue-400 hover:text-blue-300">
                    Next 24 hours →
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-y-7 sm:grid-cols-7">
                  {hourlyForecast.map(({ time, temp, icon: Icon }) => (
                    <div
                      key={time}
                      className="flex flex-col items-center gap-3"
                    >
                      <p className="text-xs text-slate-400">{time}</p>

                      <Icon
                        size={27}
                        className={
                          Icon === Sun
                            ? "text-yellow-300"
                            : Icon === Moon
                              ? "text-indigo-300"
                              : "text-blue-300"
                        }
                      />

                      <p className="text-lg font-semibold">{temp}°</p>
                    </div>
                  ))}
                </div>
              </section>
              <WeatherDetails />
            </div>

            {/* Right column */}
            <div className="min-w-0 space-y-6">
              {/* Weekly forecast */}
              <section className="rounded-2xl border border-white/10 bg-[#111c2e] p-5 md:p-6">
                <SectionTitle title="7-day forecast" icon={CloudSun} />

                <div className="space-y-1">
                  {weeklyForecast.map(
                    ({ day, condition, high, low, icon: Icon }) => (
                      <div
                        key={day}
                        className="grid grid-cols-[55px_minmax(0,1fr)_auto] items-center gap-3 rounded-xl px-2 py-3 transition hover:bg-white/[0.035]"
                      >
                        <span className="text-sm text-slate-300">{day}</span>

                        <div className="flex min-w-0 items-center gap-3">
                          <Icon
                            size={23}
                            className={
                              Icon === Sun
                                ? "shrink-0 text-yellow-300"
                                : Icon === CloudRain
                                  ? "shrink-0 text-blue-400"
                                  : "shrink-0 text-slate-300"
                            }
                          />

                          <span className="truncate text-xs text-slate-400">
                            {condition}
                          </span>
                        </div>

                        <div className="text-right text-sm">
                          <span className="font-semibold">{high}°</span>
                          <span className="ml-2 text-slate-500">{low}°</span>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </section>

              {/* Favorite cities */}
              <section className="rounded-2xl border border-white/10 bg-[#111c2e] p-5 md:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <SectionTitle title="Favorite cities" icon={Heart} />

                  <button
                    aria-label="Add favorite city"
                    className="mb-5 rounded-lg border border-white/10 p-2 text-slate-400 transition hover:border-blue-400 hover:text-blue-400"
                  >
                    <Star size={16} />
                  </button>
                </div>

                <div className="space-y-3">
                  {recentCities.map(({ city, country, temp, icon: Icon }) => (
                    <button
                      key={city}
                      className="flex w-full items-center justify-between rounded-xl border border-white/5 bg-white/[0.025] p-4 text-left transition hover:border-blue-400/30 hover:bg-white/[0.05]"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="rounded-xl bg-blue-400/10 p-2.5">
                          <Icon size={21} className="text-blue-300" />
                        </div>

                        <div className="min-w-0">
                          <p className="font-medium">{city}</p>
                          <p className="mt-1 truncate text-xs text-slate-500">
                            {country}
                          </p>
                        </div>
                      </div>

                      <span className="ml-3 text-xl font-semibold">{temp}</span>
                    </button>
                  ))}
                </div>

                <p className="mt-4 text-center text-xs text-slate-500">
                  Your favorite places, all in one view.
                </p>
              </section>

              {/* Quick tip */}
              <section className="rounded-2xl border border-blue-400/10 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-blue-400/10 p-3">
                    <Navigation size={21} className="text-blue-300" />
                  </div>

                  <div>
                    <h3 className="font-semibold">Plan your day</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Check the hourly forecast to choose the best time for
                      outdoor activities.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <footer className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-600 md:px-8">
            WeatherNow · Weather information for your everyday life
          </footer>
        </div>
      </div>
    </main>
  );
}
