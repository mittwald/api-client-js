import type { DateTime } from "luxon";

// Request
interface DataSource<T extends string> {
  name?: string;
  uid: string;
  type: T;
}

interface Query<TDataSource extends string> {
  datasource: DataSource<TDataSource>;
  maxDataPoints?: number;
  instant?: boolean;
  hide?: boolean;
  refId: string;
}

interface PrometheusQuery extends Query<"prometheus"> {
  expr: string;
}

type AnyQuery = PrometheusQuery;

type MetricsQueryTimeRangeValue = number | string;

export interface MetricsQueryTimeRange {
  from: MetricsQueryTimeRangeValue;
  to: MetricsQueryTimeRangeValue;
}

export interface MetricsQueryRequestApiData
  extends Partial<MetricsQueryTimeRange> {
  queries: AnyQuery[];
}

// Response
type MetricsQueryResponseDataValues = [number[], number[]];

interface MetricsSchemaField {
  labels?: Record<string, string>;
}

interface MetricsQueryResponseFrame {
  schema: { fields: [MetricsSchemaField, MetricsSchemaField] };
  data: { values: MetricsQueryResponseDataValues };
}

interface MetricsQueryResponseResult {
  frames: MetricsQueryResponseFrame[];
}

export interface MetricsQueryResponseApiData {
  results: Record<string, MetricsQueryResponseResult>;
}

export interface MetricsDataPoint {
  date: DateTime;
  value: number;
}

export type MetricsFrameDataPointObject = Record<string, MetricsDataPoint[]>;

export interface ServerMetricsDataObject {
  databases: MetricsFrameDataPointObject;
  project: MetricsDataPoint[];
  summary: MetricsDataPoint[];
  limit: number;
}
