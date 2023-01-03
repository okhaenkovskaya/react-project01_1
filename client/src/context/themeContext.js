import { createTheme } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

export const themeContext = createTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            light: "#0066ff",
            main: "#0044ff",
            contrastText: "#ffcc00",
        },
        grey: {
            main: grey[700],
        },
    },
});
