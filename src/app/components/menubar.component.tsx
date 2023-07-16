import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import { MenuItem, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar/AppBar";
import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography/Typography";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DarkModeToggle } from "./dark-mode-toggle.component";

export function MenuBar() {
  const theme = useTheme();
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navItems = [
    {
      text: "Home",
      route: "/",
      icon: <HomeOutlinedIcon />,
    },
    {
      text: "About",
      route: "/about",
      icon: <QuestionAnswerOutlinedIcon />,
    },
    {
      text: "Projects",
      route: "/projects",
      icon: <ArticleOutlinedIcon />,
    },
    {
      text: "Resume",
      route: "/resume",
      icon: <ContactPageOutlinedIcon />,
    },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        color: "inherit",
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.info.main
            : theme.palette.primary.main,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

          <Typography
            variant="h6"
            noWrap
            component="button"
            onClick={() => router.push("/")}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              mr: 2,
              fontFamily: "roboto",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Cody's Portfolio
          </Typography>

          <IconButton
            edge="start"
            size="large"
            id="menu-button"
            aria-label="menu"
            aria-controls={Boolean(anchorElNav) ? "menu-button" : undefined}
            aria-haspopup="true"
            aria-expanded={Boolean(anchorElNav) ? "true" : undefined}
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <MenuOutlined />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
              backgroundColor: theme.palette.primary.light,
            }}
          >
            {navItems.map((item) => (
              <MenuItem
                key={item.route}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <Link
                  href={item.route}
                  onClick={() => router.push(item.route)}
                  className="nav-button"
                >
                  {item.icon}
                  <Typography textAlign="center">{item.text}</Typography>
                </Link>
              </MenuItem>
              // <MenuItem
              //   key={item.route}
              //   onClick={handleCloseNavMenu}
              //   className="nav-button"
              //   sx={{
              //     display: "flex",
              //     alignItems: "center",
              //     gap: "5px",
              //   }}
              // >

              // </MenuItem>
            ))}
          </Menu>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="button"
            onClick={() => router.push("/")}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "roboto",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              justifyContent: "center",
            }}
          >
            Cody's Portfolio
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.route}
                onClick={() => router.push(item.route)}
                className="nav-button"
                sx={{
                  my: 2,
                  display: "flex",
                  color: "inherit",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                {item.icon}
                {item.text}
              </Button>
            ))}
          </Box>
          <DarkModeToggle />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MenuBar;
