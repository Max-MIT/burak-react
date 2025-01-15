import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";

export default function OtherNavbar() {
    const authMember = null;
    return <div className="home-navbar">
    <Container  className="navbar-container">
        <Stack className="menu">
            <Box>
                <NavLink to ="/">
                <img className="brand-logo"style={{ width: "125px", height: "30px" }} src="/icons/burak.svg"/>
                </NavLink>
            </Box>
            <Stack className="links">
                   <Box className={"hover-line"}>
                <NavLink to ="/">Home</NavLink>
                </Box>
                <Box className={"hover-line"}>
                <NavLink to ="/products"className={({ isActive }) => (isActive ? "underline" : undefined)}>
                Products
                </NavLink>
                </Box>
                {authMember ? ( 
                    <Box className={"hover-line"}>
                <NavLink to ="/orders" className={({ isActive }) => (isActive ? "underline" : undefined)}>
                Orders
                </NavLink>
                </Box>
            ) : null}
                {authMember ? ( 
                    <Box className={"hover-line"}>
                <NavLink to ="/member-page" className={({ isActive }) => (isActive ? "underline" : undefined)}>
                My Page
                </NavLink>
                </Box>
            ) : null}
                <Box className={"hover-line"}>
                <NavLink to ="/help" className={({ isActive }) => (isActive ? "underline" : undefined)}>
                Help
                </NavLink>
                </Box>
                <Basket />

                {!authMember ? (
                    <Box>
                        <Button variant="contained" className="login-button">
                            Login
                            </Button>
                        </Box>
                    ) : (
                       <img 
                      className="user-avatar"
                       src={"/icons/default-user.svg"}
                       aria-haspopup={"true"}
                       />
                    )}
            </Stack>
        </Stack>
    </Container>
</div>
;
}