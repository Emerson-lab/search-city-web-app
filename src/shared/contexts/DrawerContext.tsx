import { createContext, useCallback, useContext, useState } from 'react';

interface IDrawerContext {
  isDrawerOpenContext: boolean;
  toggleDrawerOpenContext: () => void;
  setIsDrawerOpenContext: (value: boolean) => void;
}

const DrawerContext = createContext({} as IDrawerContext);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
}

type ChildrenProps = {
  children: React.ReactNode;
}

export const DrawerProvider = ({ children }: ChildrenProps) => {
  const [isDrawerOpenContext, setIsDrawerOpenContext] = useState(false);

  const toggleDrawerOpenContext = useCallback(() => {
    setIsDrawerOpenContext(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpenContext,
        setIsDrawerOpenContext,
        toggleDrawerOpenContext
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}