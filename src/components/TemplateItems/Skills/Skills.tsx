import { FC } from 'react';

import { List, SectionWrapper } from '@components';
import { useInternational } from '@hooks';

export const Skills: FC = () => {
  const { header, item } = useInternational('skills');

  return (
    <SectionWrapper sectionName={header}>
      <List
        message={item}
        isCounted={false}
      />
    </SectionWrapper>
  );
};
