import { createContext, useCallback, useContext, useState } from 'react';

interface IDrawerOption {
  icon: string;
  path: string;
  label: string;
}

interface IDrawerContext {
  isDrawerOpenContext: boolean;
  drawerOptions: IDrawerOption[];
  toggleDrawerOpenContext: () => void;
  setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
}

const DrawerContext = createContext({} as IDrawerContext);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
}

type ChildrenProps = {
  children: React.ReactNode;
}

export const DrawerProvider = ({ children }: ChildrenProps) => {
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);
  const [isDrawerOpenContext, setIsDrawerOpenContext] = useState(false);

  const toggleDrawerOpenContext = useCallback(() => {
    setIsDrawerOpenContext(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
    setDrawerOptions(newDrawerOptions);
  }, []);

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpenContext,
        toggleDrawerOpenContext,
        drawerOptions,
        setDrawerOptions: handleSetDrawerOptions
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}