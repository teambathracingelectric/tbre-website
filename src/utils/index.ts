export function slugify(value: string | number) {
  return String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function groupBy<T, K extends string | number>(
  values: T[],
  getKey: (value: T) => K,
) {
  return values.reduce(
    (groups, value) => {
      const key = getKey(value);
      groups[key] ??= [];
      groups[key].push(value);
      return groups;
    },
    {} as Record<K, T[]>,
  );
}
