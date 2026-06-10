import Link from "next/link";

export type CardItem = {
  title: string;
  description: string;
  href: string;
};

export function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group rounded-[8px] border border-[#D0D9E8] bg-white p-6 shadow-sm transition hover:border-[#1565C0] hover:shadow-md"
        >
          <h3 className="font-semibold text-[#1E2D45] group-hover:text-[#1565C0]">{item.title}</h3>
          <p className="mt-2 text-sm text-[#374151] leading-relaxed">{item.description}</p>
          <span className="mt-4 inline-block text-sm font-medium text-[#1565C0]">Learn more</span>
        </Link>
      ))}
    </div>
  );
}
