import React from "react";
import { Navigate, NavLink, useLocation } from "react-router-dom";

import {
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
  Button,
  Collapse,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";
import MobileNav from "../Navbars/NarBar";

const LinkItems = [
  {
    name: "Dashboard",
    icon: FiHome,
    collapse: false,
    path: "/",
  },
  {
    name: "Travel Agent List",
    icon: FiTrendingUp,
    path: "/travel-agent-list",
    collapse: false,
  },
  { name: "Holiday Packages", icon: FiCompass, path: "/holiday-packages" },
  {
    name: "Team",
    icon: FiStar,
    path: "/team",
    collapse: true,
    children: [{ name: "sub ", path: "/sub", icon: FiTrendingUp }],
  },
  { name: "Reports", icon: FiSettings, path: "/reports" },
];

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const ReturnMenu = (link) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <>
      {link.collapse ? (
        <>
          <NavItem key={link.name} icon={link.icon} onClick={handleToggle}>
            {link.name}
          </NavItem>

          {link.children.map((child) => {
            return (
              <>
                <Collapse
                  style={{ marginLeft: "25px" }}
                  in={show}
                  unmountOnExit
                >
                  {ReturnMenu(child)}
                </Collapse>
              </>
            );
          })}
        </>
      ) : (
        <NavItem key={link.name} path={link.path} icon={link.icon}>
          {link.name}
        </NavItem>
      )}
    </>
  );
};

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      sx={{ marginTop: "130px", padding: "20px" }}
      transition="3s ease"
      bg={useColorModeValue("white", "red.500")}
      borderRight="1px"
      borderRadius="30px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="100vh"
      {...rest}
    >
      <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      {LinkItems.map((el) => ReturnMenu(el))}
    </Box>
  );
};

const NavItem = ({ icon, children, path, ...rest }) => {
  const location = useLocation();
  console.log("location ---> ", location);
  return (
    <NavLink to={path}>
      <Flex
        align="center"
        p="4"
        mt="2"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={path === location?.pathname ? "#0090c540" : ""}
        color={path === location?.pathname ? "#0090C5" : ""}
        _hover={{
          bg: "#0090c540",
          color: "#0090C5",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "#0090C5",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </NavLink>
  );
};

// <Link
//   //to={path}
//   href={path}
//   // replace
//   style={{ textDecoration: "none" }}
//   _focus={{ boxShadow: "none" }}
// >

// </Link>
