import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {
    //Modo errado, por hora
    let chartData: ChartData = { labels: [], series: [] };

    //Modo errado, por hora
    axios.get(`${BASE_URL}/sales/amount-by-seller`).then(response => {
        const data = response.data as SaleSum[]; // Casting para o tipo personalizado criado
        const myLabels = data.map(x => x.sellerName);
        const mySeries = data.map(x => x.sum);

        //Atualizando a charData
        chartData = { labels: myLabels, series: mySeries };
        console.log(chartData);
    });

    //const mockData = {
    //series: [477138, 499928, 444867, 220426, 473088],
    //labels: ['Anakin', 'Barry Allen', 'Bruce Wayne', 'Logan', 'Padmé']
    //}

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );

}

export default DonutChart;