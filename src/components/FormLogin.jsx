import React, { useState } from "react";
import styled, { css } from "styled-components";
import Input from "./Input";
import Button from "./Button";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ModalPassword from "./ModalPassword";
import { ToastContainer, toast } from "react-toastify";

const BoxActions = styled.div`
  height: 68%;
  margin: 3%;
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 1;
  transition: opacity 0.5s linear;
  position: absolute;
  width: 94%;

  ${(props) =>
    !props.isClicked &&
    css`
      opacity: 0;
      pointer-events: none;
    `}

  @media (max-width: 480px) {
    width: 100%;
    margin: 0px;
  }
`;

const ForgotPassword = styled.a`
  cursor: pointer;
  font-family: sans-serif;
  color: #300844;
  :hover {
    color: #8a2be1;
  }
`;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function FormLogin(props) {
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = React.useState(false);

  const [credentials, setValue] = useState({
    email: "",
    password: "",
  });

  const notify = () => {
    let inputs = { ...credentials };
    if (inputs.email !== "" && inputs.password !== "") {
      toast.success("Login realizado com Sucesso!", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Digite as informações de acesso!", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const visible = () => {
    setIsVisible(!isVisible);
  };
  return (
    <BoxActions isClicked={props.isClicked}>
      <Input
        placeholder="E-mail"
        type="text"
        margin="4%"
        marginLeft="4%"
        onChange={(e) => {
          setValue({ ...credentials, email: e.target.value });
        }}
      ></Input>
      <Input
        placeholder="Senha"
        type={isVisible ? "text" : "password"}
        margin="4%"
        marginLeft="4%"
        onChange={(e) => {
          setValue({ ...credentials, password: e.target.value });
        }}
        icon={
          isVisible ? (
            <VisibilityIcon
              style={{
                position: "absolute",
                right: "7%",
                top: "34%",
                cursor: "pointer",
                color: "#8a2be1",
              }}
              onClick={visible}
            />
          ) : (
            <VisibilityOffIcon
              style={{
                position: "absolute",
                right: "7%",
                top: "34%",
                cursor: "pointer",
                color: "#8a2be1",
              }}
              onClick={visible}
            />
          )
        }
      ></Input>
      <Button onClick={notify} text="Login"></Button>
      <ForgotPassword onClick={handleOpen}>Esqueci minha senha!</ForgotPassword>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ModalPassword />
        </Fade>
      </Modal>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </BoxActions>
  );
}
