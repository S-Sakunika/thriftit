import { Box } from "@mui/material";
import { keyframes } from "@mui/system";

function AnimatedText(props) {
  const animatedText = keyframes`
    0% {
        transform: rotateY(180deg);
    }
    20% {
        transform: rotateY(360deg);
    }
    100% {
        transform: rotateY(360deg);
    }
`;

  const text = Array.from(props.text);
  return (
    <Box
      component="span"
      sx={{
        ...props.styles,
        color: props.color
          ? (theme) => theme.palette[props.color].main
          : (theme) => theme.palette.common.black,
      }}
    >
      {text.map((el, index) => {
        return (
          <Box
            component="span"
            key={index}
            sx={{
              display: "inline-block",
              animationName: `${animatedText}`,
              animationIterationCount: "infinite",
              animationDelay: `${index * 100}ms`,
              animationDuration: `${(text.length * 100 * 100) / 20}ms`,
            }}
          >
            {el}
          </Box>
        );
      })}
    </Box>
  );
}

export default AnimatedText;
