import { useEffect, useState } from "react";
import ApexChart from 'react-apexcharts';
import { FerramentaDeDetalhe } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { IVisita, VisitasServices } from "../../shared/services/api/visitas/VisitasServices";

export const Dashboard = () => {
  const [data, setData] = useState<IVisita[]>([]);

  useEffect(() => {
    VisitasServices.getAllVisitas()
      .then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          // console.log('[result-data]', data);

          setData(result.data);
        }
      })
  }, []);

  const options = {
    xaxis: {
      categories: data.map(item => (item.x))
    },
    colors: ['#5c1868'],

    fill: {
      colors: ['#9C27B0'],
      type: 'gradient'
    },

    yaxis: {
      tooltip: {
        enabled: true,
      }
    }
  }

  const series = [{
    name: "visitas",
    data: data.map((item) => (item.y))
  }]

  // console.log('[arrayDomes]', arrayDomes);
  // console.log('[arrayDoNrVisitas]', arrayDoNrVisitas);

  return (
    <LayoutBaseDePagina
      titulo="Página inicial"
      barraDeFerramentas={
        <FerramentaDeDetalhe
          mostrarBotaoSalvarEFechar
          mostrarBotaoNovo
        />
      }
    >
      <ApexChart
        options={options}
        series={series}
        type="area"
        width={900}
        height={500}

      ></ApexChart>

    </LayoutBaseDePagina>

  )
}