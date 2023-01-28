import { useState } from 'react';
import {
  Tab,
  TabList,
  Text,
  Title,
} from '@tremor/react';
import { TabDef } from '@dashy/types/base.types';

type Props = {
  title: string,
  subtitle?: string,
  tabDefs: TabDef[],
}

export const TabLayout = ({ title, subtitle, tabDefs }: Props) => {
  const [selectedView, setSelectedView] = useState(0);
  return (
    <main className="bg-slate-50 p-6 sm:p-10">
      <Title>{title}</Title>
      {subtitle && <Text>{subtitle}</Text>}

      <TabList defaultValue={0} onValueChange={(value) => setSelectedView(value)} marginTop="mt-6">
        {tabDefs.map(({ text }, index) => (
          <Tab key={text} value={index} text={text} />
        ))}
      </TabList>

      {tabDefs[selectedView]?.children}
    </main>
  );
};

