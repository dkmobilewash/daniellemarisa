/**
 * Renders a JSON-LD <script> tag for any schema.org object.
 * Pass one schema object or an array of schema objects.
 */
export function StructuredData({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
