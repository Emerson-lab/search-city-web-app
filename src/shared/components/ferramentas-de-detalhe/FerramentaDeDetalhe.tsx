import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton, Theme, Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";

interface IFerramentaDeDetalheprops {
  textBotaoNovo?: string;

  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;

  mostrarBotaoNovoCarregando?: boolean;
  mostrarBotaoVoltarCarregando?: boolean;
  mostrarBotaoApagarCarregando?: boolean;
  mostrarBotaoSalvarCarregando?: boolean;
  mostrarBotaoSalvarEFecharCarregando?: boolean;

  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentaDeDetalhe: React.FC<IFerramentaDeDetalheprops> = ({
  textBotaoNovo = 'Novo',

  aoClicarEmApagar,
  aoClicarEmNovo,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar,
  aoClicarEmVoltar,

  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEFecharCarregando = false,
  mostrarBotaoVoltarCarregando = false

}) => {
  const isSmDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const isMdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
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
      {mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando ?
        <Button
          variant="contained"
          color="primary"
          disableElevation
          startIcon={<Icon>save</Icon>}
          onClick={aoClicarEmSalvar}
        >
          <Typography
            variant="button"
            noWrap
          >
            Salvar
          </Typography>
        </Button>
        :
        null
      }

      {mostrarBotaoSalvarCarregando ?
        <Skeleton width={100} height={60} />
        :
        null
      }

      {mostrarBotaoSalvarEFechar &&
        !mostrarBotaoSalvarEFecharCarregando &&
        !isSmDown &&
        !isMdDown
        ?
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>save</Icon>}
          onClick={aoClicarEmSalvarEFechar}
        >
          <Typography
            variant="button"
            noWrap
          >
            Salvar e fechar
          </Typography>
        </Button>
        :
        null
      }

      {mostrarBotaoSalvarEFecharCarregando &&
        !isSmDown &&
        !isMdDown ?
        <Skeleton width={180} height={60} />
        :
        null
      }

      {mostrarBotaoApagar && !mostrarBotaoApagarCarregando ?
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>delete</Icon>}
          onClick={aoClicarEmApagar}
        >
          <Typography
            variant="button"
            noWrap
          >
            Apagar
          </Typography>
        </Button>
        :
        null
      }

      {mostrarBotaoApagarCarregando ?
        <Skeleton width={100} height={60} />
        :
        null
      }

      {mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !isSmDown ?
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>add</Icon>}
          onClick={aoClicarEmNovo}
        >
          <Typography
            variant="button"
            noWrap
          >
            {textBotaoNovo}
          </Typography>

        </Button>
        :
        null
      }

      {mostrarBotaoNovoCarregando && !isSmDown ?
        <Skeleton width={100} height={60} />
        :
        null
      }

      {mostrarBotaoVoltar &&
        mostrarBotaoNovo ||
        mostrarBotaoApagar ||
        mostrarBotaoSalvar ||
        mostrarBotaoSalvarEFechar &&
        <Divider
          variant='middle'
          orientation="vertical"
        />
      }

      {mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando ?
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>arrow_back</Icon>}
          onClick={aoClicarEmVoltar}
        >
          <Typography
            variant="button"
            noWrap
          >
            Voltar
          </Typography>
        </Button>
        :
        null
      }

      {mostrarBotaoVoltarCarregando ?
        <Skeleton width={100} height={60} />
        :
        null
      }
    </Box>
  )
}