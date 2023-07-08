import Chart from 'react-apexcharts'
import { color, fonts } from '@styles/constants'

type DonutChartProps = {
  series: number
}

const defaultOptions = {
  grid: { padding: { top: 0, left: 0, right: 0, bottom: 0 } },
  chart: {
    width: 100,
    height: 100,
    sparkline: {
      enabled: true
    }
  },
  fill: {
    colors: [color.primaryBlue2]
  },
  stroke: {
    lineCap: 'round' as const
  },
  plotOptions: {
    radialBar: {
      hollow: { size: '50%' },
      track: { background: '#000E4D' },
      dataLabels: {
        name: { show: false },
        value: {
          offsetY: 5,
          fontSize: '.9rem',
          fontFamily: fonts.poppins,
          color: color.white
        }
      }
    }
  }
}

export default function DonutChart({ series }: DonutChartProps) {
  return (
    <Chart
      series={[series]}
      width={78}
      height={78}
      options={defaultOptions}
      type="radialBar"
    />
  )
}
