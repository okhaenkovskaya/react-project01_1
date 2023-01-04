import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const RadioButtonsGroup = () => {
    return (
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
    );
};

export default RadioButtonsGroup;
