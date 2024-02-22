// TODO: Need to handle useContext and styled-component
import Button from "./Button";
import styled from "styled-components";
import { withControls } from "@storybook/addon-controls";
import { ChangeLayoutContext } from "../../context/changeLayoutContext";
import { DataContext } from "../../context/dataContext";
import { ToggleModeContext } from "../../context/ToggleModeContext";

const StyledButton = styled.div`
  & a {
    display: inline-block;
    background-color: transparent;
    cursor: pointer;
    color: #8bfdfe;
    padding: 0.6rem 1.7rem;
    border: 1px solid #8bfdfe;
    border-radius: 8px;
    transition: all 0.5s ease;
    transform: none;

    &:hover {
      transform: scale(1.1);
    }

    &.lightMode {
      color: #1b1f29;
      border-color: #1b1f29;
    }
  }
`;

const MockProvider = (StoryFn) => {
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
};

export default {
  title: "Button",
  component: Button,
  decorators: [MockProvider],
  tags: ["autodocs"],
};

export const Default = {
  args: {
    label: "Explore",
    url: "#myproject",
  },
};

export const LightMode = {
  args: {
    ...Default.args,
  },
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
              value={{ isLightMode: true, setIsLightMode: () => {} }}
            >
              <StoryFn />
            </ToggleModeContext.Provider>
          </DataContext.Provider>
        </ChangeLayoutContext.Provider>
      );
    },
  ],
};
