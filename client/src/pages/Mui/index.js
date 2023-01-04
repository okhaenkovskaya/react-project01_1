import {
    Container,
    Grid,
    Paper,
    Box,
    TextField,
    InputLabel,
    FormControl,
    Pagination,
    InputAdornment,
    Divider,
    Button,
    Typography,
    MenuItem,
    Select,
} from "@mui/material";
import { ThemeProvider, styled } from "@mui/material/styles";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";

import PrimarySearchAppBar from "../../components/MUI/Header";
import ToggleButtonSizes from "../../components/MUI/ToggleButton";
import BasicCard from "../../components/MUI/BasicCard";
import RadioButtonsGroup from "../../components/MUI/RadioGroup";
import CheckboxGroup from "../../components/MUI/CheckboxGroup";
import { themeContext } from "../../context/themeContext";

const PageContainer = styled(Paper)({ backgroundColor: "#fff" });

const PageMUI = () => {
    return (
        <ThemeProvider theme={themeContext}>
            <PageContainer>
                <PrimarySearchAppBar />

                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            "& > *": {
                                m: 1,
                            },
                        }}
                        container
                        spacing={2}
                    >
                        <Typography variant="h5">Latest Jobs</Typography>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                "& > *": {
                                    m: 1,
                                },
                            }}
                        >
                            <ToggleButtonSizes />

                            <FormControl>
                                <InputLabel id="demo-simple-select-label">
                                    Age
                                </InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    value="10"
                                    label="Age"
                                >
                                    <MenuItem value={10}>Latest</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    <Divider
                        sx={{
                            marginBottom: "15px",
                            marginTop: "15px",
                        }}
                    />
                    <Grid container spacing={4}>
                        <Grid item xs={6} md={3}>
                            <Box
                                component="form"
                                sx={{
                                    "& .MuiTextField-root": {
                                        marginBottom: "15px",
                                        width: "100%",
                                    },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>
                                    <TextField
                                        id="outlined-helperText"
                                        label="Location"
                                        defaultValue="19904"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <LocationOnIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />

                                    <TextField
                                        id="outlined-search"
                                        label="Search by title"
                                        type="search"
                                        defaultValue="Senior|"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SearchIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </div>
                            </Box>
                            <Button
                                variant="outlined"
                                sx={{
                                    marginBottom: "15px",
                                    width: "100%",
                                    color: "#fff",
                                    fontSize: "15px",
                                    backgroundColor: "#5D5FEF",
                                }}
                            >
                                ACTION
                            </Button>

                            <RadioButtonsGroup />
                            <CheckboxGroup />
                            <Button variant="text">Show more</Button>
                        </Grid>
                        <Grid item xs={6} md={9}>
                            <BasicCard />
                            <BasicCard />
                            <BasicCard />
                            <Pagination
                                sx={{
                                    marginBottom: "15px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                                count={10}
                                color="primary"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </PageContainer>
        </ThemeProvider>
    );
};

export default PageMUI;
