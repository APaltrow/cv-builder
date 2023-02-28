import { FC } from 'react';

import { Deletable, SectionWrapper } from '@components';

import { useList, useInternational } from '@hooks';

import { WorkItem } from './WorkItem/WorkItem';

export const WorkExperience: FC = () => {
  const [jobs, onAddNewJob, onDeleteJob] = useList();
  const workExperience = useInternational('experience');

  return (
    <SectionWrapper
      sectionName={workExperience}
      onAddNew={onAddNewJob}
    >
      <WorkItem />

      {jobs.map((job) => (
        <Deletable
          key={job}
          onDelete={() => onDeleteJob(job)}
        >
          <WorkItem />
        </Deletable>
      ))}
    </SectionWrapper>
  );
};
