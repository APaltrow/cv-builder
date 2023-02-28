import { FC } from 'react';

import emailIcon from '@assets/images/email.svg';
import phoneIcon from '@assets/images/phone.svg';
import locationIcon from '@assets/images/location.svg';

import { List } from '@components';
import { useInternational } from '@hooks';

import style from './Contacts.module.scss';

export const Contacts: FC = () => {
  const { city, email, phone, social } = useInternational('contacts');

  return (
    <section className={style.contacts}>
      <div className={style.contacts_item}>
        <img
          src={locationIcon}
          alt="location icon"
          className={style.contacts_icon}
        />

        <p contentEditable>{city}</p>
      </div>

      <div className={style.contacts_item}>
        <img
          src={emailIcon}
          alt="email icon"
          className={style.contacts_icon}
        />

        <p contentEditable>{email}</p>
      </div>
      <div className={style.contacts_item}>
        <img
          src={phoneIcon}
          alt="phone icon"
          className={style.contacts_icon}
        />

        <p contentEditable>{phone}</p>
      </div>

      <List message={social} />
    </section>
  );
};
