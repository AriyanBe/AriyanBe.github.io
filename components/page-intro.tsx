export function PageIntro({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="page-intro">
      <p className="eyebrow">
        {number}. {label}
      </p>
      <h1>{title}</h1>
      <p className="page-description">{description}</p>
    </div>
  );
}
