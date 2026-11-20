
import React from "react";

import {
    Box,
    Typography,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import FolderIcon from "@mui/icons-material/Folder";
import TaskIcon from "@mui/icons-material/Task";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {

    const menuItems = [
        {
            name: "Dashboard",
            icon: <DashboardIcon />,
            active: true,
        },
        {
            name: "Employees",
            icon: <PeopleIcon />,
            active: false,
        },
        {
            name: "Projects",
            icon: <FolderIcon />,
            active: false,
        },
        {
            name: "Tasks",
            icon: <TaskIcon />,
            active: false,
        },
    ];

    return (

        <Box sx={sidebarStyle}>

            {/* Logo */}

            <Typography sx={logoStyle}>
                Work
                <span style={{ color: "#60a5fa" }}>
                    Sphere
                </span>
            </Typography>

            {/* Navigation */}

            <Box sx={{ mt: 4 }}>

                {menuItems.map((item) => (

                    <Box
                        key={item.name}
                        sx={{
                            ...menuItemStyle,
                            ...(item.active ? activeMenuStyle : {}),
                        }}
                    >

                        {item.icon}

                        <Typography>
                            {item.name}
                        </Typography>

                    </Box>

                ))}

            </Box>

            {/* Bottom Menu */}

            <Box sx={{ mt: "auto" }}>

                <Box sx={menuItemStyle}>
                    <SettingsIcon />
                    <Typography>Settings</Typography>
                </Box>

                <Box sx={menuItemStyle}>
                    <LogoutIcon />
                    <Typography>Logout</Typography>
                </Box>

            </Box>

        </Box>

    );
};

export default Sidebar;


// STYLES

const sidebarStyle = {
    width: "250px",
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    color: "#ffffff",
    padding: "25px 18px",
    display: "flex",
    flexDirection: "column",
};

const logoStyle = {
    fontSize: "25px",
    fontWeight: 800,
    letterSpacing: "0.5px",
};

const menuItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "13px 15px",
    marginBottom: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#cbd5e1",
    transition: "0.3s",

    "&:hover": {
        backgroundColor: "#1e293b",
        color: "#ffffff",
    },
};

const activeMenuStyle = {
    backgroundColor: "#2563eb",
    color: "#ffffff",
};