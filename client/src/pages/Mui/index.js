import React from "react";
import {
    Container,
    Grid,
    Paper,
    Box,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    InputLabel,
    FormControl,
    FormLabel,
    Pagination,
    FormGroup,
    Checkbox,
    InputAdornment,
    Divider,
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
    MenuItem,
    Select,
    CardHeader,
    Avatar,
    ButtonGroup,
} from "@mui/material";
import { ThemeProvider, styled } from "@mui/material/styles";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";

import PrimarySearchAppBar from "../../components/MUI/Header";
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
                            <ButtonGroup
                                variant="outlined"
                                color="grey"
                                aria-label="outlined button group"
                            >
                                <Button>
                                    <DashboardIcon />
                                </Button>
                                <Button>
                                    <FormatAlignLeftIcon />
                                </Button>
                            </ButtonGroup>

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
                            <FormControl>
                                <FormLabel
                                    sx={{
                                        marginBottom: "15px",
                                        color: "rgba(0,0,0,0.6)",
                                        fontSize: "14px",
                                    }}
                                    id="demo-radio-buttons-group-label"
                                >
                                    Status
                                </FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel
                                        value="label"
                                        control={<Radio checked />}
                                        label="Label"
                                    />
                                    <FormControlLabel
                                        value="open"
                                        control={<Radio />}
                                        label="Open"
                                    />
                                    <FormControlLabel
                                        value="archived"
                                        control={<Radio />}
                                        label="Archived"
                                    />
                                </RadioGroup>
                            </FormControl>
                            <FormGroup>
                                <FormLabel
                                    sx={{
                                        marginBottom: "15px",
                                        color: "rgba(0,0,0,0.6)",
                                        fontSize: "14px",
                                    }}
                                    id="demo-checkbox-buttons-group-label"
                                >
                                    Contract type
                                </FormLabel>
                                <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label="Freelance"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Full-time"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Internship"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Part-time"
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel
                                    sx={{
                                        marginBottom: "15px",
                                        color: "rgba(0,0,0,0.6)",
                                        fontSize: "14px",
                                    }}
                                    id="demo-level-buttons-group-label"
                                >
                                    Level
                                </FormLabel>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Any"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Director"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Entry-level"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Lead"
                                />
                            </FormGroup>
                            <Button variant="text">Show more</Button>
                        </Grid>
                        <Grid item xs={6} md={9}>
                            <Card sx={{ marginBottom: "15px", minWidth: 275 }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: "#BDBDBD" }}>
                                            <PersonIcon />
                                        </Avatar>
                                    }
                                    title="Senior Product Designer"
                                />
                                <CardContent>
                                    <Typography
                                        sx={{ fontSize: 14 }}
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        Exciting news! I’m hiring mid-level and
                                        senior Product Designers to join my team
                                        at Acme, where we’re building the future
                                        of eCommerce. <br />
                                        • Own a product area, work
                                        cross-platform
                                        <br />
                                        • Small, talented, tight-knit team
                                        <br />
                                        • SF, ATL or Remote
                                        <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="text">ACTION</Button>
                                    <Button
                                        startIcon={<RemoveRedEyeIcon />}
                                        size="small"
                                    >
                                        Watch
                                    </Button>
                                </CardActions>
                            </Card>
                            <Card sx={{ marginBottom: "15px", minWidth: 275 }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: "#BDBDBD" }}>
                                            <PersonIcon />
                                        </Avatar>
                                    }
                                    title="Senior Product Designer"
                                />
                                <CardContent>
                                    <Typography
                                        sx={{ fontSize: 14 }}
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        Exciting news! I’m hiring mid-level and
                                        senior Product Designers to join my team
                                        at Acme, where we’re building the future
                                        of eCommerce. <br />
                                        • Own a product area, work
                                        cross-platform
                                        <br />
                                        • Small, talented, tight-knit team
                                        <br />
                                        • SF, ATL or Remote
                                        <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="text">ACTION</Button>
                                    <Button
                                        startIcon={<RemoveRedEyeIcon />}
                                        size="small"
                                    >
                                        Watch
                                    </Button>
                                </CardActions>
                            </Card>
                            <Card sx={{ marginBottom: "15px", minWidth: 275 }}>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: "#BDBDBD" }}>
                                            <PersonIcon />
                                        </Avatar>
                                    }
                                    title="Senior Product Designer"
                                />
                                <CardContent>
                                    <Typography
                                        sx={{ fontSize: 14 }}
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        Exciting news! I’m hiring mid-level and
                                        senior Product Designers to join my team
                                        at Acme, where we’re building the future
                                        of eCommerce. <br />
                                        • Own a product area, work
                                        cross-platform
                                        <br />
                                        • Small, talented, tight-knit team
                                        <br />
                                        • SF, ATL or Remote
                                        <br />
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="text">ACTION</Button>
                                    <Button
                                        startIcon={<RemoveRedEyeIcon />}
                                        size="small"
                                    >
                                        Watch
                                    </Button>
                                </CardActions>
                            </Card>
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
