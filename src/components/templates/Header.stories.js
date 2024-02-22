import Header from "./Header";
import { ChangeLayoutContext } from "../../context/changeLayoutContext";
import { DataContext } from "../../context/dataContext";
import { ToggleModeContext } from "../../context/ToggleModeContext";

export default {
  component: Header,
  title: "header",
  tags: ["autodocs"],
  decorators: [
    (StoryFn) => {
      return (
        <ChangeLayoutContext.Provider
          value={{
            isScrollingDown: false,
            isAsideShown: () => {},
            isTopBtnActive: false,
            setIsScrollingDown: () => {},
            setIsAsideShown: false,
            setIsTopBtnActive: () => {},
          }}
        >
          <DataContext.Provider
            value={{
              resumeUrl: "",
              setResumeUrl: () => {},
              projectImages: [],
              setProjectImages: () => {},
            }}
          >
            <ToggleModeContext.Provider
              value={{ isLightMode: false, setIsLightMode: () => {} }}
            >
              <StoryFn />
            </ToggleModeContext.Provider>
          </DataContext.Provider>
        </ChangeLayoutContext.Provider>
      );
    },
  ],
};

export const Default = {
  args: {},
};
