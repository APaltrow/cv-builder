import { FC } from 'react';

import fillInfoIcon from '@assets/images/fill.png';
import printerIcon from '@assets/images/printer.svg';
import addPhotoIcon from '@assets/images/addphoto.svg';
import constructIcon from '@assets/images/logoColored.svg';

import { useInternational } from '@hooks';

import style from './GuideWidgets.module.scss';

export const GuideWidgets: FC = () => {
  const { construct, photo, print, info } = useInternational('widgets');

  return (
    <section className={style.guide_widget_container}>
      <div className={style.guide_widget_item}>
        <img
          src={constructIcon}
          alt="construct"
        />
        <h3>{construct}</h3>
      </div>
      <div className={style.guide_widget_item}>
        <img
          src={addPhotoIcon}
          alt="camera"
        />
        <h3>{photo}</h3>
      </div>
      <div className={style.guide_widget_item}>
        <img
          src={fillInfoIcon}
          alt="fill info"
        />
        <h3>{info}</h3>
      </div>
      <div className={style.guide_widget_item}>
        <img
          src={printerIcon}
          alt="printer"
        />
        <h3>{print}</h3>
      </div>
    </section>
  );
};
