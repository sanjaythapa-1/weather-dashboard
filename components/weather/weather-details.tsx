import { Droplets, Gauge, Sun, Thermometer, Wind, Eye } from "lucide-react";

import SectionTitle from "@/components/ui/section-title";

const weatherDetails = [
  { label: "Feels like", value: "17°C", icon: Thermometer },
  { label: "Humidity", value: "62%", icon: Droplets },
  { label: "Wind speed", value: "12 km/h", icon: Wind },
  { label: "Visibility", value: "10 km", icon: Eye },
  { label: "Pressure", value: "1012 hPa", icon: Gauge },
  { label: "UV index", value: "5 Moderate", icon: Sun },
];

export default function WeatherDetails() {
  return (
    <section>
      <SectionTitle title="Weather details" icon={Gauge} />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {weatherDetails.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="rounded-xl border border-white/5 bg-white/[0.035] p-4"
          >
            <div className="mb-3 flex items-center gap-2 text-slate-400">
              <Icon size={17} className="text-blue-400" />

              <span className="text-xs">{label}</span>
            </div>

            <p className="text-lg font-semibold text-white">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
