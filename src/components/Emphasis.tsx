import { Fragment, type ReactElement } from 'react';

/**
 * Renders **double-asterisk** spans as <strong>, so content files stay plain
 * strings instead of JSX or raw HTML.
 */
export default function Emphasis({ text }: { text: string }): ReactElement {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-ink">
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
