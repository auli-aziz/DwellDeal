import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const ActiveLink = ({ href, children, ...props }: { href: string; children: ReactNode }) => {
  const path = usePathname();

  return (
    <Link href={href} {...props} className={path.endsWith(href) ? "font-semibold" : "" + "font-shanti text-dark md:text-base text-sm"}>
      {children}
    </Link>
  );
};

export default ActiveLink;
