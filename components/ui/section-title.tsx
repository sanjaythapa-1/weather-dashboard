import type { LucideIcon } from "lucide-react";

type SectionTitleProps = {
  title: string;
  icon: LucideIcon;
};

export default function SectionTitle({ title, icon: Icon }: SectionTitleProps) {
  return (
    <div className="mb-5 flex items-center gap-2">
      <Icon size={19} className="text-blue-400" />

      <h2 className="text-base font-semibold text-white">{title}</h2>
    </div>
  );
}
