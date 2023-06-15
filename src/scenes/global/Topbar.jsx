import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { colorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(colorModeContext);
    
    return (<Box display="flex" justifyContent="space-between" p={2}>
        {/* Search bar */}
        <Box 
            display="flex" 
            backgroundColor={colors.primary[400]} 
            borderRadius="3px">

            <InputBase sx={{ml: 2, flex: 1}} placeholder ="search" />
            <IconButton type="button" sx={{p: 1}}>
                <SearchIcon />
            </IconButton>

        </Box>
        {/* Icons */}
        <Box display="flex">
            
            {/* Icon for toggling through light and dark modes */}
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                    <DarkModeOutlinedIcon />
                ) : (
                    <LightModeOutlinedIcon />
                )}
            </IconButton>

            {/* Notification button */}
            <IconButton>
                <NotificationsOutlinedIcon />
            </IconButton>

            {/* Settings button */}
            <IconButton>
                    <SettingsOutlinedIcon />
            </IconButton>

            {/* Person button */}
            <IconButton>
                    <PersonOutlinedIcon />
            </IconButton>
        </Box>
    </Box>
    );
};

export default Topbar;