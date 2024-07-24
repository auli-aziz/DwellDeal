import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const ActiveLink = ({ href, children, onClick }: { href: string; children: ReactNode; onClick: () => void }) => {
  const path = usePathname();

  return (
    <Link href={href} onClick={onClick} className={path.endsWith(href) ? "font-semibold" : "" + "font-shanti text-dark text-sm hover:font-semibold"}>
      {children}
    </Link>
  );
};

export default ActiveLink;
