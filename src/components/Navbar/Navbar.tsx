import { FC } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { useInternational } from '@hooks';

import style from './Navbar.module.scss';

export const Navbar: FC = () => {
  const links = useInternational('navigation');

  const { pathname } = useLocation();

  return (
    <ul className={style.Navbar}>
      {links.map(({ name, url, id }) => (
        <Link
          to={url}
          key={id}
        >
          <li className={pathname === url ? style.item_active : style.item}>
            {name}
          </li>
        </Link>
      ))}
    </ul>
  );
};
