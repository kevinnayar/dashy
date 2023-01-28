import { Block, Card, Title, AreaChart } from '@tremor/react';
import { ChartData } from '@dashy/types/base.types';
import { dollarFormatter } from '@dashy/utils/numeric.utils';

export const AreaChartCard = ({ title, data }: { title: string, data: ChartData[] }) => (
  <Block marginTop="mt-6">
  <Card>
    <Title>{title}</Title>
    <AreaChart
      data={data}
      categories={Object.keys(data[0]).filter(d => d !== 'date')}
      dataKey="date"
      height="h-72"
      colors={['indigo', 'cyan']}
      valueFormatter={dollarFormatter}
      marginTop="mt-4"
    />
  </Card>
  </Block>
);
