import {
  Icon, IconButton, LinearProgress, Pagination, Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow
} from '@mui/material';
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { FerramentasDaListagem } from "../../shared/components";
import { Enviroment } from '../../shared/environments';
import { useDebounce } from "../../shared/hooks";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { IListagemPessoa, PessoasServices } from "../../shared/services/api/pessoas/PessoasServices";

export const ListagemDePessoas: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce();
  const navigate = useNavigate();

  const [rows, setRows] = useState<IListagemPessoa[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  const pagina = useMemo(() => {
    return Number(searchParams.get('pagina') || '1');
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);

    debounce(() => {
      PessoasServices.getAll(pagina, busca)
        .then((result) => {
          setIsLoading(false);

          if (result instanceof Error) {
            alert(result.message);
          } else {
            // console.log('[result]', result);

            setRows(result.data);
            setTotalCount(result.totalCount);
          }
        })
    })
  }, [busca, pagina]);

  const handleDelete = (id: number) => {
    if (window.confirm('Realmente deseja apagar?')) {
      PessoasServices.deleteById(id)
        .then(result => {
          if (result instanceof Error) {
            alert(result.message);
          } else {
            setRows(oldRows => [
              ...oldRows.filter(ldRow => ldRow.id !== id)
            ]
            )
            alert('Registro apagado com sucesso!');
          }
        })
    }
  }

  return (
    <LayoutBaseDePagina
      titulo="Listagem de pessoas"
      barraDeFerramentas={
        <FerramentasDaListagem
          textBotaoNovo="Nova"
          mostrarInputBusca
          textoDaBusca={busca}
          aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
          aoMudarTextoDeBusca={texto =>
            setSearchParams(
              { busca: texto, pagina: '1' },
              { replace: true }
            )}
        />
      }
    >
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ m: 1, width: 'auto' }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ações</TableCell>
              <TableCell>Nome completo</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell>
                  <IconButton
                    onClick={() => handleDelete(row.id)}
                    size="small"
                  >
                    <Icon>delete</Icon>
                  </IconButton>
                  <IconButton
                    onClick={() => navigate(`/pessoas/detalhe/${row.id}`)}
                    size="small"
                  >
                    <Icon>edit</Icon>
                  </IconButton>
                </TableCell>
                <TableCell>{row.nomeCompleto}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>

          {totalCount === 0 && !isLoading ?
            <caption>Nenhum registro encontrado.</caption>
            :
            null
          }

          <TableFooter>
            {isLoading ?
              <TableRow>
                <TableCell colSpan={3}>
                  <LinearProgress
                    variant='indeterminate'
                  />
                </TableCell>
              </TableRow>
              :
              null
            }
            {totalCount > 0 && totalCount > Enviroment.LIMITE_DE_LINHAS ?
              <TableRow>
                <TableCell colSpan={3}>
                  <Pagination
                    page={pagina}
                    count={Math.ceil(totalCount / Enviroment.LIMITE_DE_LINHAS)}
                    onChange={(_, newPage) =>
                      setSearchParams({
                        busca,
                        pagina: newPage.toString()
                      },
                        { replace: true })
                    }
                  />
                </TableCell>
              </TableRow>
              :
              null
            }
          </TableFooter>
        </Table>
      </TableContainer>
    </LayoutBaseDePagina>
  )
}