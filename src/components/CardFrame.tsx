import { Box } from "@mui/material";

type CardFrameProps = {
  cardImg: any;
};

export const CardFrame = ({ cardImg }: CardFrameProps) => {
  return (
    <Box
      sx={{
        height: "7rem",
        width: "4.5rem",
        backgroundImage: `url(${cardImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></Box>
  );
};
