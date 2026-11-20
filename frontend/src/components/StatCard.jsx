
import React from "react";

import {
  Box,
  Typography,
} from "@mui/material";

const StatCard = ({ title, value, description, icon }) => {

  return (

    <Box sx={cardStyle}>

      <Box>

        <Typography sx={titleStyle}>
          {title}
        </Typography>

        <Typography sx={valueStyle}>
          {value}
        </Typography>

        <Typography sx={descriptionStyle}>
          {description}
        </Typography>

      </Box>

      <Box sx={iconStyle}>
        {icon}
      </Box>

    </Box>

  );
};

export default StatCard;


// STYLES

const cardStyle = {
  backgroundColor: "#ffffff",
  padding: "22px",
  borderRadius: "12px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
};

const titleStyle = {
  color: "#64748b",
  fontSize: "14px",
};

const valueStyle = {
  fontSize: "30px",
  fontWeight: 700,
  color: "#1e293b",
  marginTop: "10px",
};

const descriptionStyle = {
  color: "#16a34a",
  fontSize: "12px",
  marginTop: "8px",
};

const iconStyle = {
  backgroundColor: "#eff6ff",
  color: "#2563eb",
  padding: "15px",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
};
