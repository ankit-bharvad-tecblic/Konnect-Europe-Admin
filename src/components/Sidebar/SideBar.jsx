import React from "react";

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
  { name: "Home", icon: FiHome },
  { name: "Travel Agent List", icon: FiTrendingUp },
  { name: "Holiday Packages", icon: FiCompass },
  { name: "Team", icon: FiStar },
  { name: "Reports", icon: FiSettings },
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

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      sx={{ marginTop: "130px" }}
      transition="3s ease"
      bg={useColorModeValue("white", "red.500")}
      borderRight="1px"
      borderRadius="30px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="80vh"
      {...rest}
    >
      <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      <Box my="4" alignItems="center" mx="1" justifyContent="space-between">
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
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
    </Link>
  );
};
