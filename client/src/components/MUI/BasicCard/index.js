import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, CardHeader } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const BasicCard = () => {
    return (
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
                    Exciting news! I’m hiring mid-level and senior Product
                    Designers to join my team at Acme, where we’re building the
                    future of eCommerce. <br />
                    • Own a product area, work cross-platform
                    <br />
                    • Small, talented, tight-knit team
                    <br />
                    • SF, ATL or Remote
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="text">ACTION</Button>
                <Button startIcon={<RemoveRedEyeIcon />} size="small">
                    Watch
                </Button>
            </CardActions>
        </Card>
    );
};

export default BasicCard;
