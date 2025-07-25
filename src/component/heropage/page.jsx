import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: "50vh",
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  marginBottom: theme.spacing(4),
  backgroundImage:
    "linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(255,255,255,0.1) 100%)",
}));

const HeroContent = styled(Box)(({ theme }) => ({
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center",
}));

const StatsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  marginTop: theme.spacing(4),
}));

const StatItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
}));

const HeroPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <HeroContainer>
      <HeroContent>
        <Typography
          variant={isMobile ? "h4" : "h3"}
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Welcome to Your Admin Dashboard
        </Typography>

        <Typography
          variant={isMobile ? "body1" : "h6"}
          component="p"
          sx={{ mb: 3, opacity: 0.9 }}
        >
          Manage job postings, applicants, and company profiles with ease. Get
          insights with our comprehensive analytics.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            size={isMobile ? "medium" : "large"}
          >
            View Analytics
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size={isMobile ? "medium" : "large"}
          >
            Manage Jobs
          </Button>
        </Box>

        <StatsContainer>
          <StatItem>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              1,240
            </Typography>
            <Typography variant="body2">Active Jobs</Typography>
          </StatItem>
          <StatItem>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              5,689
            </Typography>
            <Typography variant="body2">Total Applicants</Typography>
          </StatItem>
          <StatItem>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              87
            </Typography>
            <Typography variant="body2">Companies</Typography>
          </StatItem>
        </StatsContainer>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroPage;
