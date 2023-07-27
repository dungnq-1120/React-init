import { keyframes, styled } from "@mui/material/styles";

export const ProcessLoading = styled("div", {
  shouldForwardProp: (prop) => prop !== "isDone",
})<{ isDone: boolean }>(({ theme, isDone }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: 0,
  height: 3,
  backgroundColor: `${theme.palette.primary.main}`,
  zIndex: 1001,
  animationFillMode: "forwards",

  ...(isDone
    ? {
        animation: `${doneAnimation} .5s ease`,
      }
    : {
        animation: `${loaderAnimation} 1.5s ease`,
      }),
}));

const loaderAnimation = keyframes`
  0% {
    width: 0;
  }
  50% {
    width: 50%;
  }
  100% {
    width: 80%;
  }
`;

const doneAnimation = keyframes`
  0% {
    width: 80%;
  }
  100% {
    width: 100%;
  }
`;
