export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Topics">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
