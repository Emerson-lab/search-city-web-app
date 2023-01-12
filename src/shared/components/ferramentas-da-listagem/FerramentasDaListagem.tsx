import {
  Box,
  Button,
  Icon,
  Paper,
  TextField,
  useTheme
} from '@mui/material';

interface IFerramentasDaListagem {
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;
  textBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagem> = ({
  aoMudarTextoDeBusca,
  mostrarInputBusca = false,
  textoDaBusca = '',
  aoClicarEmNovo,
  mostrarBotaoNovo = true,
  textBotaoNovo = 'Novo'
}) => {
  const theme = useTheme();

  return (
    <Box
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
      gap={1}
      component={Paper}
    >
      {mostrarInputBusca ?
        <TextField
          size="small"
          placeholder='Pesquisar...'
          value={textoDaBusca}
          onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
        />
        :
        null
      }

      <Box flex={1} display="flex" justifyContent="end">
        {mostrarBotaoNovo ?
          <Button
            variant="contained"
            color="primary"
            disableElevation
            endIcon={<Icon>add</Icon>}
            onClick={aoClicarEmNovo}
          >
            {textBotaoNovo}
          </Button>
          :
          null
        }
      </Box>
    </Box>
  )
}