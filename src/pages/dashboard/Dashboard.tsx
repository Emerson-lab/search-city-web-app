import { useEffect, useState } from "react";
import Chart from 'react-apexcharts';
import { FerramentaDeDetalhe } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { VisitasServices } from "../../shared/services/api/visitas/VisitasServices";

export const Dashboard = () => {

  const [nomeDoMesDaVisita, setNomeDoMesDaVisita] = useState<any>([]);
  const [numeroDeVisitas, setNumeroDeVisitas] = useState<number[]>([]);

  const arrayDomes = nomeDoMesDaVisita
  const arrayDoNrVisitas = numeroDeVisitas

  useEffect(() => {

    const mesDaVisita: string[] = []
    const numeroDeVisitas: number[] = []

    VisitasServices.getAllVisitas()
      .then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          console.log('[result]', result);


          for (let i = 0; i < result.data.length; i++) {

            mesDaVisita.push(result?.data[i].dataDaVista);
            numeroDeVisitas.push(result?.data[i].nrvisitas);

          }
          setNumeroDeVisitas(numeroDeVisitas);
          setNomeDoMesDaVisita(mesDaVisita);
        }
      })
  }, []);

  const OpitionsChartLine = {

  }

  const SeriesChsrtLine = [{
    name: "visitas",
    data: arrayDoNrVisitas
  }]

  console.log('[arrayDomes]', arrayDomes);
  console.log('[arrayDoNrVisitas]', arrayDoNrVisitas);

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
      <Chart
        type="area"
        width={700}
        height={500}
        series={SeriesChsrtLine}
        options={OpitionsChartLine}

      ></Chart>

    </LayoutBaseDePagina>

  )
}