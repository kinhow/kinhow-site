import Link from 'next/link';
import { MENU_LINKS } from './menu';
import { ProfileName } from '@/components';

export const Header = () => {
  return (
    <nav className='flex items-center border-b border-border rounded-t-lg bg-secondary-background'>
      <Link href="/" className='flex p-4 text-2xl'>
        <ProfileName name="KINHOW" className='tracking-wide' />
      </Link>
      <ul className='flex flex-1 justify-end'>
        {MENU_LINKS?.map((item, index) => (
          <li key={index}>
            <Link className='flex p-4' href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
