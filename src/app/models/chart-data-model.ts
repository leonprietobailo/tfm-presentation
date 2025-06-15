export interface ChartPoint {
  x: number;
  y: number;
}

export interface ChartDataset {
  label: string;
  data: ChartPoint[];
  fill: boolean;
  borderColor: string;
  tension: number;
  showLine: boolean;
}

export interface ChartData {
  datasets: ChartDataset[];
}
