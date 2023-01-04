import { useState } from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ToggleButtonSizes = () => {
    const [alignment, setAlignment] = useState("left");

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const children = [
        <ToggleButton value="left" key="left">
            <DashboardIcon />
        </ToggleButton>,
        <ToggleButton value="justify" key="justify">
            <FormatAlignLeftIcon />
        </ToggleButton>,
    ];

    const control = {
        value: alignment,
        onChange: handleChange,
        exclusive: true,
    };

    return (
        <Stack spacing={2} alignItems="center">
            <ToggleButtonGroup {...control} aria-label="Medium sizes">
                {children}
            </ToggleButtonGroup>
        </Stack>
    );
};

export default ToggleButtonSizes;
