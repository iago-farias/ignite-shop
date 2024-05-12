import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh"
});

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  button: {
    position: "relative",
    backgroundColor: "$gray800",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    border: 0,
    width: 42,
    height: 42,
    cursor: "pointer",
    color: "$gray600",

    "&:hover": {
      color: "$gray100",
    },

    div: {
      top: -18,
      right: -18,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      backgroundColor: "$green500",
      color: "$white",
      border: "2px solid $gray900",
      padding: 4,
      borderRadius: 999,
      width: 24,
      height: 24
    }
  }
})