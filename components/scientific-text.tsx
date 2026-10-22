// Italicize scientific names without HTML injection or changing stored plain text.
const scientificNames = /(Tetrahymena(?: thermophila| elliotti| malaccensis| pyriformis| utriculariae| borealis)?|Paramecium tetraurelia|Escherichia coli|E\. coli|SOX4)/g;
export function ScientificText({ children }: { children: string }) {
  return children.split(scientificNames).map((part, i) =>
    i % 2 ? <i key={i}>{part}</i> : part,
  );
}
