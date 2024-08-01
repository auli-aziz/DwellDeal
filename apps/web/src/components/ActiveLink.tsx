import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const ActiveLink = ({ href, children, onClick }: { href: string; children: ReactNode; onClick: () => void }) => {
  const path = usePathname();

  return (
    <Link href={href} onClick={onClick} className={`text-dark ${path.endsWith(href) ? "font-semibold" : "" + "hover:font-semibold"}`}>
      {children}
    </Link>
  );
};

export default ActiveLink;
