import { FC, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import {
  PrintButton,
  NamePosition,
  WorkExperience,
  Photo,
  Contacts,
  Education,
  Skills,
  About,
} from '@components';

import style from './ResumeTemplate.module.scss';

export const ResumeTemplate: FC = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div
        className={style.Resume}
        ref={componentRef}
      >
        <div className={style.info_section}>
          <Photo />
          <Contacts />
          <Education />
          <Skills />
          <About />
        </div>
        <div className={style.main_section}>
          <NamePosition />
          <WorkExperience />
        </div>
      </div>
      <span className={style.print}>
        <PrintButton onPrint={handlePrint} />
      </span>
    </>
  );
};
