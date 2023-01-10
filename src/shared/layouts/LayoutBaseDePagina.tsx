import { Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useDrawerContext } from "../contexts";

type ILayoutPageBaseProps = {
  children: React.ReactNode;
  titulo: string;
}

export const LayoutBaseDePagina = ({ children, titulo }: ILayoutPageBaseProps) => {
  const isSmDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const theme = useTheme();

  const { toggleDrawerOpenContext } = useDrawerContext();

  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      gap={1}
    >
      <Box
        padding={1}
        display="flex"
        alignItems="center"
        height={theme.spacing(12)}
        gap={1}
      >
        {isSmDown ?
          <IconButton onClick={toggleDrawerOpenContext}>
            <Icon>menu</Icon>
          </IconButton>
          :
          null}

        <Typography variant="h5">
          {titulo}
        </Typography>
      </Box>

      <Box>
        Barra de ferramentas
      </Box>

      <Box>
        {children}
      </Box>
    </Box>
  );
}