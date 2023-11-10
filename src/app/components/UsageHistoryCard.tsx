import React from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

// Importar os estilos e componentes do Chart.js
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, ArcElement, LineElement, ChartData, BubbleDataPoint, Point } from 'chart.js';
import Chart from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, ArcElement, LineElement);

const neonColors = [
    'rgba(255, 68, 68, 0.6)',
    'rgba(102, 255, 102, 0.6)',
    'rgba(68, 68, 255, 0.6)',
    'rgba(255, 204, 68, 0.6)',
    'rgba(255, 68, 255, 0.6)',
];

interface BarChartProps {
    data: Chart.ChartData;
}


// Componente de gráfico reutilizável
function BarChart({ data }: { data: Chart.ChartData<"bar", (number | [number, number] | Point | BubbleDataPoint | null)[], unknown> }) {
    return (
        <div className="bg-bgfooter m-fit p-4 rounded shadow-md text-black">
            <Bar data={data} />
        </div>
    );
}


function DoughnutChart({ data }: { data: Chart.ChartData<"doughnut", (number | [number, number] | Point | BubbleDataPoint | null)[], unknown> }) {
    return (
        <div className="bg-bgfooter p-4 rounded shadow-md text-black">
            <Doughnut data={data} />
        </div>
    );
}

function LineChart({ data }: { data: Chart.ChartData<"line", (number | [number, number] | Point | BubbleDataPoint | null)[], unknown> }) {
    return (
        <div className="bg-bgfooter p-4 rounded shadow-md text-black">
            <Line data={data} />
        </div>
    );
}

const UsageHistoryCard: React.FC = () => {
    const apps = ['Instagram', 'Facebook', 'VsCode', 'Whatsapp', 'ChatGPT'];

    const barChartData = {
        labels: apps,
        datasets: [
            {
                label: 'Uso Mensal',
                data: [50, 30, 70, 20, 90],
                backgroundColor: neonColors,
                borderColor: neonColors,
                borderWidth: 1,
            },
        ],
    };

    const doughnutChartData = {
        labels: apps,
        datasets: [
            {
                data: [85, 30, 70, 20, 90],
                backgroundColor: neonColors,
                borderColor: neonColors,
                borderWidth: 1,
            },
        ],
    };
    

    const lineChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Uso Mensal',
                data: [80, 60, 50, 80, 85],
                fill: false,
                borderColor: 'rgba(255, 102, 102, 0.6)',
            },
        ],
    };

    const currentWeekData = [50, 30, 70, 20, 90]; // Data for the current week
    const lastWeekData = [40, 35, 60, 25, 85]; // Data for the last week

    const combinedBarChartData = {
        labels: apps,
        datasets: [
            {
                label: 'Uso Mensal (Last Week)',
                data: lastWeekData,
                backgroundColor: 'rgba(255, 68, 68, 0.6)',
                borderColor: 'rgba(255, 68, 68, 0.6)',
                borderWidth: 1,
            },
            {
                label: 'Uso Mensal (Current Week)',
                data: currentWeekData,
                backgroundColor: 'rgba(102, 255, 102, 0.6)',
                borderColor: 'rgba(102, 255, 102, 0.6)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Histórico de Utilização de Aplicações</h2>
          <div className="flex flex-wrap space-y-4 md:space-y-0 md:space-x-4">
            <div className="bg-white p-4 rounded-lg shadow-md flex-1">
              <h3 className="text-lg font-semibold mb-2">Aplicativos:</h3>
              <ul>
                {apps.map((app) => (
                  <li key={app} className="mb-1">
                    {app}
                  </li>
                ))}
              </ul>
            </div>
      
            <BarChart data={barChartData} />
            <DoughnutChart data={doughnutChartData} />
            <LineChart data={lineChartData} />
          </div>
      
          <div className="bg-bgfooter mt-4 p-4 rounded-lg shadow-lg text-white">
            <h3 className="text-lg font-semibold">Diferença de Semanas</h3>
            <div className="mt-4">
              <LineChart data={combinedBarChartData} />
            </div>
          </div>
        </div>
      );
      
      
      
};

export default UsageHistoryCard;
