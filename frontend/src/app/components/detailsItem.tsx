export default function DetailsItem({
  title,
  value,
}: {
  title: string;
  value: any;
}) {
  return (
    <div className="flex justify-between">
      <div className="font-bold">{title}:</div>
      <div>{value}</div>
    </div>
  );
}
