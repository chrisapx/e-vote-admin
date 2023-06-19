import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css"
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";


const Sidebar = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [ isCollapsed, setIsCollapsed] = useState(false);
    const [ selected, setSelected] = useState("Dashboard");
    
    return (
        <Box
            sx={
                {
                    "& .pro-sidebar-inner": {
                        background: `${colors.primary[400]} !important`
                    },
                    "& .pro-icon-wrapper": {
                        backgroundColor: "transparent !important"
                    },
                    "& .pro-inner-item": {
                        padding: "5px 35px 5px 20px !important"
                    },
                    "& .pro-inner-item:hoover": {
                        color: "#868dfb !important"
                    },
                    "& .pro-menu-item-active": {
                        color: "#6870fa !important"
                    }
                }
        }>
            <ProSidebar>
                <Menu>

                    <MenuItem>
                    {
                        !isCollapsed && (
                           <Box 
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                marginLeft="15px"
                           >

                            <Typography variant="h3" color={colors.grey[100]}>
                                ADMIN
                            </Typography>

                            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                <MenuOutlinedIcon />
                            </IconButton>

                           </Box>
                        )
                    }
                    </MenuItem>

                    {/* USER */}

                    {!isCollapsed && (

                        <Box marginBottom="25px">

                            <Box display="flex" alignItems="center" justifyContent="center">
                                <img 
                                    alt="profile pic"
                                    height="100px"
                                    width="100px"
                                    src={`../../assets/chris.png`}
                                    style={{cursor: "pointer", borderRadius: "50%"}}
                                />
                            </Box>
                            
                            <Box textAlign="center">
                                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{m: "10px 0 0 0"}}>user's name</Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>user's tittle</Typography>
                            </Box>
                        </Box>
                    )

                    }

                </Menu>

            </ProSidebar>
        </Box>

    );
}

export default Sidebar;