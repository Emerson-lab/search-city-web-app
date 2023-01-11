import {
  Icon,
  IconButton,
  Theme,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { Box } from "@mui/system";
import { useDrawerContext } from "../contexts";

type ILayoutPageBaseProps = {
  children: React.ReactNode;
  titulo: string;
  barraDeFerramentas: React.ReactNode;
}

export const LayoutBaseDePagina = ({ children, titulo, barraDeFerramentas }: ILayoutPageBaseProps) => {
  const isSmDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const isMdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
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
        height={theme.spacing(isSmDown ? 6 : isMdDown ? 8 : 12)}
        gap={1}
      >
        {isSmDown ?
          <IconButton onClick={toggleDrawerOpenContext}>
            <Icon>menu</Icon>
          </IconButton>
          :
          null}

        <Typography
          variant={isSmDown ? "h5" : isMdDown ? 'h4' : 'h3'}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {titulo}
        </Typography>
      </Box>

      {
        barraDeFerramentas ?
          <Box>
            {barraDeFerramentas}
          </Box>
          :
          null
      }

      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
}