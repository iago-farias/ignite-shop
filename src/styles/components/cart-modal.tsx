import { styled } from "..";

export const Cart = styled("div", {
  height: "100%",
  width: "30%",
  backgroundColor: "$gray800",
  position: "absolute",
  top: 0,
  right: 0,

  h1: {
    fontSize: "$lg",
    fontWeight: "bold",
    color: "$gray100",
    margin: "0 3rem",
    marginTop: 24
  },

  footer: {
    minHeight: 300,
    padding: "0 3rem",

    div: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8,

      span: {
        fontSize: "$md",
        color: "$gray300",
      },

      strong: {
        fontSize: "$md",
        color: "$gray300",
        fontWeight: "bold"
      }
    },

    button: {
      backgroundColor: "$green500",
      borderRadius: 8,
      border: 0,
      color: "$white",
      width: "100%",
      height: 70,
      cursor: "pointer",
      fontSize: "$md",
      fontWeight: "bold",
      marginTop: 57,

      "&:hover": {
        backgroundColor: "$green300",
      }
    }
  }
});

export const CloseButtonContainer = styled("div", {
  display: "flex",
  justifyContent: "end",
  padding: "1.5rem",

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    border: 0,
    width: 42,
    height: 42,
    cursor: "pointer",
    backgroundColor: "transparent",
    color: "$gray600",
  
    "&:hover": {
      color: "$gray100",
    }
  }
});

export const CartItemImageContainer = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  width: 100,
  height: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover"
  }
});

export const CartItemListContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  marginTop: 32,
  marginBottom: 32,
  padding: "0 3rem",
  overflowY: "auto",
  maxHeight: 500
});

export const CartItem = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1.25rem",

  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.5rem",

    span: {
      fontSize: "$md",
      color: "$gray300",
    },

    strong: {
      fontSize: "$md",
      color: "$gray300",
      fontWeight: "bold"
    },

    button: {
      border: 0,
      color: "$green500",
      backgroundColor: "transparent",
      cursor: "pointer",
      fontSize: "$md",
      fontWeight: "bold",

      "&:hover": {
        color: "$green300",
      }
    }
  }
});