import { MetricData } from '@dashy/types/base.types';

export function dollarFormatter(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value).toString();
}

export function metricFormatter({ type, value }: MetricData) {
  if (type === 'dollar') return dollarFormatter(value);
  const formatted = new Intl.NumberFormat('en-US').format(value).toString();
  return type === 'percent' ? `${formatted}%` : formatted;
}