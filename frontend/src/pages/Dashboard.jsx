
import React from "react";

import { Box, Typography } from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import FolderIcon from "@mui/icons-material/Folder";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

const Dashboard = () => {

    const stats = [
        {
            title: "Total Employees",
            value: "120",
            description: "Active team members",
            icon: <PeopleIcon />,
        },
        {
            title: "Total Projects",
            value: "24",
            description: "Currently running",
            icon: <FolderIcon />,
        },
        {
            title: "Completed Tasks",
            value: "185",
            description: "Successfully completed",
            icon: <CheckCircleIcon />,
        },
        {
            title: "Pending Tasks",
            value: "32",
            description: "Waiting for completion",
            icon: <AccessTimeIcon />,
        },
    ];

    return (

        <Box sx={dashboardStyle}>

            <Sidebar />

            <Box sx={mainContentStyle}>

                {/* HEADER */}

                <Box sx={headerStyle}>

                    <Box>

                        <Typography sx={headingStyle}>
                            Dashboard
                        </Typography>

                        <Typography sx={subtitleStyle}>
                            Welcome back! Here's your workspace overview.
                        </Typography>

                    </Box>

                    <Box sx={profileStyle}>

                        <Typography fontWeight={700}>
                            Admin User
                        </Typography>

                        <Typography fontSize={13} color="text.secondary">
                            Administrator
                        </Typography>

                    </Box>

                </Box>


                {/* STATISTICS */}

                <Box sx={statsGridStyle}>

                    {stats.map((stat) => (

                        <StatCard
                            key={stat.title}
                            title={stat.title}
                            value={stat.value}
                            description={stat.description}
                            icon={stat.icon}
                        />

                    ))}

                </Box>


                {/* RECENT ACTIVITY */}

                <Box sx={activityStyle}>

                    <Typography sx={activityHeadingStyle}>
                        Recent Activity
                    </Typography>

                    <Typography sx={activityTextStyle}>
                        New project created – Website Redesign
                    </Typography>

                    <Typography sx={activityTextStyle}>
                        Rahul completed a task – Login UI
                    </Typography>

                    <Typography sx={activityTextStyle}>
                        New employee added – Priya Sharma
                    </Typography>

                </Box>

            </Box>

        </Box>

    );

};

export default Dashboard;


// STYLES

const dashboardStyle = {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
};

const mainContentStyle = {
    flex: 1,
    padding: "35px",
    minWidth: 0,
};

const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
};

const headingStyle = {
    fontSize: "28px",
    fontWeight: 800,
    color: "#1e293b",
};

const subtitleStyle = {
    fontSize: "14px",
    color: "#64748b",
    marginTop: "8px",
};

const profileStyle = {
    backgroundColor: "#ffffff",
    padding: "12px 20px",
    borderRadius: "10px",
};

const statsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
};

const activityStyle = {
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "12px",
    marginTop: "30px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
};

const activityHeadingStyle = {
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: "20px",
};

const activityTextStyle = {
    fontSize: "14px",
    color: "#475569",
    padding: "12px 0",
    borderBottom: "1px solid #f1f5f9",
};
