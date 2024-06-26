import { useState } from "react";
import Sidebar from "../components/Sidebar";
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";
import HeroSection from "../components/HeroSection";
import { Box } from "@mui/material";
import SponsorComponent from "@/components/SponsorComponent";
import DataTable from "@/components/DataTable";

export default function HomePage() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleRegisterOpen = () => {
    setRegisterOpen(true);
  };

  const handleRegisterClose = () => {
    setRegisterOpen(false);
  };

  const toggleDrawer = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box style={{ marginLeft: sidebarOpen ? 240 : 0 }}>
      <Sidebar
        toggleDrawer={toggleDrawer}
        open={sidebarOpen}
        handleDrawerToggle={toggleDrawer}
      />
      <HeroSection sidebarOpen={sidebarOpen} />
      <Box padding="30px">
        <SponsorComponent />
        <DataTable />
      </Box>

      <LoginModal open={loginOpen} handleClose={handleLoginClose} />
      <RegisterModal open={registerOpen} handleClose={handleRegisterClose} />
    </Box>
  );
}
