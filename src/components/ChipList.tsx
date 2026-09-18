interface ChipListProps {
  items: string[];
  primary?: string[];
  allPrimary?: boolean;
  className?: string;
}

export default function ChipList({ items, primary = [], allPrimary = false, className = '' }: ChipListProps) {
  return (
    <ul className={`flex flex-wrap gap-[7px] ${className}`}>
      {items.map((item) => (
        <li key={item} className={`chip ${allPrimary || primary.includes(item) ? 'chip-key' : ''}`}>
          {item}
        </li>
      ))}
    </ul>
  );
}
