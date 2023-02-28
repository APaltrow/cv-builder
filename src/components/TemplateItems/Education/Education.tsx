import { FC } from 'react';

import { Deletable, SectionWrapper } from '@components';

import { useList, useInternational } from '@hooks';

import style from './Education.module.scss';

const EducationItem: FC = () => {
  const { specialization, university, timeline } =
    useInternational('education').item;
  return (
    <div className={style.education_item}>
      <h3 contentEditable>{specialization}</h3>
      <p contentEditable>{university}</p>
      <p contentEditable>{timeline}</p>
    </div>
  );
};

export const Education: FC = () => {
  const [educations, onAddEducation, onDeleteEducation] = useList();
  const educationHeader = useInternational('education').header;

  return (
    <SectionWrapper
      sectionName={educationHeader}
      onAddNew={onAddEducation}
    >
      <EducationItem />

      {educations.map((education) => (
        <Deletable onDelete={() => onDeleteEducation(education)}>
          <EducationItem key={education} />
        </Deletable>
      ))}
    </SectionWrapper>
  );
};
