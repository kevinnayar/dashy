import { Block, Card } from '@tremor/react';
import { PageHead } from '@dashy/components/PageHead';
import { KpiGrid } from '@dashy/components/KpiGrid';
import { TabLayout } from '@dashy/components/TabLayout';
import { AreaChartCard } from '@dashy/components/AreaChartCard';
import { KpiData, TabDef, ChartData } from '@dashy/types/base.types';

const kpiData: KpiData[] = [
  {
    title: 'Sales',
    metric: {
      value: 45_564,
      type: 'dollar',
    },
    goal: {
      value: 50_000,
      type: 'dollar',
    },
    delta: {
      text: '23.9%',
      type: 'increase',
    },
  },
  {
    title: 'Profit',
    metric: {
      value: 12_699,
      type: 'dollar',
    },
    goal: {
      value: 16_500,
      type: 'dollar',
    },
    delta: {
      text: '13.2%',
      type: 'moderateIncrease',
    },
  },

  {
    title: 'Customers',
    metric: {
      value: 1072,
      type: 'raw',
    },
    goal: {
      value: 1200,
      type: 'raw',
    },
    delta: {
      text: '10.1%',
      type: 'moderateDecrease',
    },
  },
  {
    title: 'Prospects',
    metric: {
      value: 234,
      type: 'raw',
    },
    goal: {
      value: 250,
      type: 'raw',
    },
    delta: {
      text: '67.1%',
      type: 'increase',
    },
  },
];

const chartData: ChartData[] = [
  {
    date: 'Jan 22',
    SemiAnalysis: 2890,
    PragmaConfig: 2338,
  },
  {
    date: 'Feb 22',
    SemiAnalysis: 2756,
    PragmaConfig: 2103,
  },
  {
    date: 'Mar 22',
    SemiAnalysis: 3322,
    PragmaConfig: 2194,
  },
  {
    date: 'Apr 22',
    SemiAnalysis: 3470,
    PragmaConfig: 2108,
  },
  {
    date: 'May 22',
    SemiAnalysis: 3475,
    PragmaConfig: 1812,
  },
  {
    date: 'Jun 22',
    SemiAnalysis: 3129,
    PragmaConfig: 1726,
  },
];

const tabDefs: TabDef[] = [
  {
    text: 'Operations',
    children: (
      <>
        <KpiGrid data={kpiData} />
        <AreaChartCard title="Revenue over time (USD)" data={chartData} />
      </>
    ),
  },
  {
    text: 'Engineering',
    children: (
      <Block marginTop="mt-6">
        <Card>
          <div className="h-96" />
        </Card>
      </Block>
    ),
  },
];

export default function Home() {
  return (
    <>
      <PageHead />
      <TabLayout
        title="Dashboard"
        subtitle="Lorem ipsum dolor sit amet elitr."
        tabDefs={tabDefs}
      />
    </>
  );
}
