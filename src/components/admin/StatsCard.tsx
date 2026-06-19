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
    <div className="bg-white w-[40vh] rounded-2xl flex justify-between gap-3 p-4 ">
      <div>
        <h3>{label}</h3>
        <p className="text-2xl">{value}</p>
        <p className="text-sm">{subtext}</p>
      </div>
        <span className={`${iconBg} material-symbols-outlined p-2 h-fit rounded-md`}>
          {icon}
        </span>
    </div>
  );
}
