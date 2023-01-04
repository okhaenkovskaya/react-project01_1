import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { FormGroup } from "@mui/material";

const CheckboxGroup = () => {
    return (
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
            <FormControlLabel control={<Checkbox />} label="Full-time" />
            <FormControlLabel control={<Checkbox />} label="Internship" />
            <FormControlLabel control={<Checkbox />} label="Part-time" />
        </FormGroup>
    );
};

export default CheckboxGroup;
