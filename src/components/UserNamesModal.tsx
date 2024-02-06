import styled from "@emotion/styled";
import { Box, Stack, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import backgroundImg from "../assets/Background.png";
import { Player1Icon } from "./Player1Icon";
import { Player2Icon } from "./Player2Icon";

const BootstrapDialog = styled(Dialog)(() => ({
  "& .MuiDialog-paper": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: 8,
  },
  "& .MuiInputBase-root": {
    backgroundColor: "white",
    "&:focus": {
      backgroundColor: "white",
    },
  },
}));

export default function UserNamesDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullScreen
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            fontFamily: "Poppins",
            fontWeight: 700,
            fontSize: "40px",
            color: "white",
          }}
          id="customized-dialog-title"
        >
          Memory
        </DialogTitle>
        <Button
          sx={{
            position: "absolute",
            right: 50,
            top: 20,
            backgroundColor: "#D4190C",
            fontFamily: "Poppins",
            color: "white",
            textTransform: "none",
            fontWeight: 800,
            fontSize: "28px",
            paddingX: 2,
            "&:hover": {
              backgroundColor: "#7c1008",
            },
          }}
          variant="contained"
          onClick={handleClose}
        >
          Exit Game
        </Button>
        {/* <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton> */}
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "52px",
              color: "white",
              letterSpacing: 0.5,
            }}
          >
            Are you ready to play?
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <Stack
              sx={{
                width: "20rem",
                justifyContent: "around",
                alignItems: "center",
              }}
            >
              <Player1Icon />
              <TextField
                id="outlined-basic"
                label="Name of Player 1"
                variant="filled"
                sx={{ marginTop: 5 }}
                size="small"
                fullWidth
              />
            </Stack>
            <Stack
              sx={{
                width: "20rem",
                justifyContent: "around",
                alignItems: "center",
              }}
            >
              <Player2Icon />
              <TextField
                id="outlined-basic"
                label="Name of Player 2"
                variant="filled"
                sx={{ marginTop: 5 }}
                size="small"
                fullWidth
              />
            </Stack>
          </Box>
          <Button
            sx={{
              backgroundColor: "#0AB169",
              fontFamily: "Poppins",
              color: "white",
              textTransform: "none",
              fontWeight: 800,
              fontSize: "28px",
              paddingX: 8,
              marginy: 10,
              "&:hover": {
                backgroundColor: "#2e7d32",
              },
            }}
            variant="contained"
            onClick={handleClose}
          >
            Let's Play
          </Button>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
