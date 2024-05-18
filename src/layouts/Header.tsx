import Link from 'next/link';
import { MENU_LINKS } from '@/constants/menu';

export const Header = () => {
  return (
    <nav>
      <ul className='flex gap-4'>
        {MENU_LINKS?.map((item, index) => (
          <li key={index}>
            <a className='p-4 text-white'>{item.name}</a>
            {/* <Link className='p-4 text-white' href={item.link}>{item.name}</Link> */}
          </li>
        ))}
      </ul>
    </nav>
  )
}
