import { ColGrid } from '@tremor/react';
import { KpiCard } from '@dashy/components/KpiCard';
import { KpiData } from '@dashy/types/base.types';

export const KpiGrid = ({ data }: { data: KpiData[] }) => (
  <ColGrid numColsMd={2} numColsLg={4} gapX="gap-x-6" gapY="gap-y-6" marginTop="mt-6">
    {data.map(({ title, metric, goal, delta }) => (
      <KpiCard key={title} title={title} metric={metric} goal={goal} delta={delta} />
    ))}
  </ColGrid>
);
