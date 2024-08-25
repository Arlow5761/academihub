import Link from 'next/link';

interface Item {
  id: string;
  title: string;
  subtitle: string;
}

interface PageProps {
  items: Item[];
}

const Page: React.FC<PageProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item: Item) => (
        <Link key={item.id} href={`/detail/${item.id}`} passHref>
          <div className="card">
            <h2>{item.title}</h2>
            <p>{item.subtitle}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Page;