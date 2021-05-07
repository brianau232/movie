import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#D15DFF", // main làm màu bg, dark làm màu hover, contrastext quy định màu chữ và màu hiệu ứng
      contrastText: "red",
    },
    secondary: {
      main: "#cae023",
      contrastText: "white",
    },
  },
});

export default theme;
