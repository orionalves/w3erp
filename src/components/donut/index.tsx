// import React from 'react'

// const DonutChart: React.FC = () => {
//   const radius = 40 // Raio do donut
//   const strokeWidth = 10 // Largura da borda

//   const calculateDashOffset = (value: number) => {
//     const circumference = 2 * Math.PI * radius
//     const progress = value / 100
//     return circumference * (1 - progress)
//   }

//   return (
//     <svg width={radius * 2} height={radius * 2}>
//       <circle
//         cx={radius}
//         cy={radius}
//         r={radius - strokeWidth / 2}
//         fill="transparent"
//         stroke="#e0e0e0"
//         strokeWidth={strokeWidth}
//       />
//       <circle
//         cx={radius}
//         cy={radius}
//         r={radius - strokeWidth / 2}
//         fill="transparent"
//         stroke="#2196f3"
//         strokeWidth={strokeWidth}
//         strokeDasharray={2 * Math.PI * radius}
//         strokeDashoffset={calculateDashOffset(75)}
//       />
//     </svg>
//   )
// }

// export default DonutChart

import Chart from 'react-apexcharts'
import { color, fonts } from '@styles/constants'

type GraficoDashboardProps = {
  series: number
}

const GraficoDashboard = {
  grid: { padding: { top: 0, left: 0, right: 0, bottom: 0 } },
  chart: {
    sparkline: {
      enabled: true
    }
  },
  fill: {
    colors: [color.primaryBlue2],
    borderRadius: '5px'
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

export default function DonutChart({ series }: GraficoDashboardProps) {
  return (
    <Chart
      series={[series]}
      width={100}
      height={100}
      options={GraficoDashboard}
      type="radialBar"
    />
  )
}
