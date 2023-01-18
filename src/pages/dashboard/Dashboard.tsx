import { FerramentaDeDetalhe } from "../../shared/components"
import { LayoutBaseDePagina } from "../../shared/layouts"

export const Dashboard = () => {
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
      Testando
    </LayoutBaseDePagina>

  )
}