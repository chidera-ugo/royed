import { createContext, PropsWithChildren, useContext, useState } from "react";

const BaseContext = createContext<State | undefined>(undefined);

interface State {
  showMenu: boolean;
  toggleMenu: (query: boolean) => void;
  headerBg: HeaderBgColors;
  changeHeaderBg: (color: HeaderBgColors) => void;
}

type HeaderBgColors = "white" | "transparent";

export const BaseContextProvider = ({
  children,
}: PropsWithChildren<Record<string, unknown>>) => {
  const [showMenu, setShowMenu] = useState(false);
  const [headerBg, setHeaderBg] = useState<HeaderBgColors>("transparent");

  const toggleMenu = (query: boolean) => {
    setShowMenu(query);
  };

  const changeHeaderBg = (color: HeaderBgColors) => {
    setHeaderBg(color);
  };

  return (
    <BaseContext.Provider
      value={{
        showMenu,
        toggleMenu,
        changeHeaderBg,
        headerBg,
      }}
    >
      {children}
    </BaseContext.Provider>
  );
};

export const useBaseContext = () => {
  const Base = useContext(BaseContext);

  if (!Base) {
    throw new Error("Unable to find context");
  }

  return Base;
};
