import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";

interface IFerramentaDeDetalheprops {
  textBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;

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
      {mostrarBotaoSalvar ?
        <Button
          variant="contained"
          color="primary"
          disableElevation
          startIcon={<Icon>save</Icon>}
          onClick={aoClicarEmSalvar}
        >
          Salvar
        </Button>
        :
        null
      }

      {mostrarBotaoSalvarEFechar ?
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>save</Icon>}
          onClick={aoClicarEmSalvarEFechar}
        >
          Salvar e voltar
        </Button>
        :
        null}

      {mostrarBotaoApagar ?
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>delete</Icon>}
          onClick={aoClicarEmApagar}
        >
          Apagar
        </Button>
        :
        null
      }


      {mostrarBotaoNovo ?
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>add</Icon>}

          onClick={aoClicarEmNovo}
        >
          {textBotaoNovo}
        </Button>
        :

        null
      }


      <Divider
        variant='middle'
        orientation="vertical"
      />

      {mostrarBotaoVoltar ?
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>arrow_back</Icon>}
          onClick={aoClicarEmVoltar}
        >
          Voltar
        </Button>
        :
        null
      }

    </Box>
  )
}