import React from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

// Importar os estilos e componentes do Chart.js
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, ArcElement, LineElement, ChartData } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, ArcElement, LineElement);

const neonColors = [
    'rgba(255, 68, 68, 0.6)',
    'rgba(102, 255, 102, 0.6)',
    'rgba(68, 68, 255, 0.6)',
    'rgba(255, 204, 68, 0.6)',
    'rgba(255, 68, 255, 0.6)',
];

interface BarChartProps {
    data: ChartJS.ChartData;
}

// Componente de gráfico reutilizável
function BarChart({ data }: BarChartProps) {
    return (
        <div className="bg-bgfooter m-fit p-4 rounded shadow-md text-black">
            <Bar data={data} />
        </div>
    );
}

function DoughnutChart({ data }: BarChartProps) {
    return (
        <div className="bg-bgfooter p-4 rounded shadow-md text-black">
            <Doughnut data={data} />
        </div>
    );
}

function LineChart({ data }: BarChartProps) {
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

    return (
        <div className="bg-gray-300 text-black p-4 rounded shadow-md w-fit">
            <h2 className="text-xl font-semibold">Histórico de Utilização de Aplicações</h2>
            <div className="flex mt-4 space-x-4">
                <div className="p-4 w-fit rounded shadow-md bg-gray-400 text-black">
                    <h3 className="text-lg font-light">Aplicativos:</h3>
                    <ul>
                        {apps.map((app) => (
                            <li key={app} className="mt-2 font-serif font-bold">
                                {app}
                            </li>
                        ))}
                    </ul>
                </div>

                <BarChart data={barChartData} />
                <DoughnutChart data={doughnutChartData} />
                <LineChart data={lineChartData} />
            </div>
        </div>
    );
};

export default UsageHistoryCard;
