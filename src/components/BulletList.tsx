import Emphasis from './Emphasis';

export default function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-[9px]">
      {items.map((item) => (
        <li key={item} className="bullet">
          <Emphasis text={item} />
        </li>
      ))}
    </ul>
  );
}
