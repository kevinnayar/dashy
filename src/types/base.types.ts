import { DeltaType } from '@tremor/react';

export type MetricData = {
  value: number,
  type: 'dollar' | 'percent' | 'raw'
};

export type DeltaData = {
  text: string,
  type: DeltaType,
};

export type KpiData = {
  title: string, // Sales
  metric: MetricData, // $12,699
  goal: MetricData,
  delta?: DeltaData, // 12%
}

export type TabDef = {
  text: string,
  children: any,
};

export type ChartData = {
  date: string,
  [k: string]: string | number,
}

