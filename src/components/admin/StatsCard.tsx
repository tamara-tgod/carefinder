interface StatsCardProps {
  label: string;
  value: number | string;
  icon: string;
  subtext: string;
  iconBg: string;
}

export default function Statscard({
  label,
  value,
  icon,
  subtext,
  iconBg
}: StatsCardProps) {

  return (
    <div className="bg-white rounded-2xl flex w-56 justify-between gap-3 p-4 hover:border hover:border-primary transition-colors">
      <div>
        <h3 className="uppercase text-sm font-medium  pb-2">{label}</h3>
        <p className="text-2xl">{value}</p>
        <p className="text-sm">{subtext}</p>
      </div>
        <span className={`${iconBg} material-symbols-outlined p-2 h-fit rounded-md `}>
          {icon}
        </span>
    </div>
  );
}
