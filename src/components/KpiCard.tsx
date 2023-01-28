import {
  BadgeDelta,
  Block,
  Card,
  Flex,
  Metric,
  ProgressBar,
  Text,
} from '@tremor/react';
import { KpiData } from '@dashy/types/base.types';
import { metricFormatter } from '@dashy/utils/numeric.utils';

export const KpiCard = ({ title, metric, goal, delta }: KpiData) => {
  const metricValue = metricFormatter(metric);
  const goalValue = metricFormatter(goal);
  const percent = (metric.value / goal.value) * 100;
  return (
    <Card maxWidth="max-w-lg">
      <Flex alignItems="items-start">
        <Block>
          <Text>{title}</Text>
          <Metric>{metricValue}</Metric>
        </Block>
        {delta && <BadgeDelta deltaType={delta.type} text={delta.text} />}
      </Flex>
      <Flex marginTop="mt-4">
        <Text truncate={true}>
          ${(percent).toFixed(2)}% ({metricValue})
        </Text>
        <Text> {goalValue} </Text>
      </Flex>
      <ProgressBar percentageValue={percent} marginTop="mt-2" />
    </Card>
  );
};

