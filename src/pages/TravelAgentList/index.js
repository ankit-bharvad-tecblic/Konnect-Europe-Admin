import React from "react";
import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Stack,
  Text,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { MdBuild } from "react-icons/md";
import { Search2Icon, PhoneIcon } from "@chakra-ui/icons";
import { render } from "@testing-library/react";

const TravelAgentList = () => {
  const tableFilterBtnList = [
    {
      total: 10,
      name: "Activated Agents",
    },
    {
      total: 20,
      name: "Approval Pending ",
    },
    {
      total: 30,
      name: "Deactivated Pending",
    },
    {
      total: 60,
      name: "All Agents",
    },
  ];

  return (
    <Box
      borderRadius={25}
      m={{ base: "90px 0px", md: "112px 0px", lg: "112px 0px" }}
      h="calc(100vh - 0vh)"
      w="100%"
      p={6}
      bg="#f1f1f1"
    >
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Text
            fontSize={{ base: "30px", md: "40px", lg: "25px" }}
            as="b"
            color="primary"
            isTruncated
          >
            Travel Agents
          </Text>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <ButtonGroup size="sm" isAttached variant="outline">
            <Button borderRadius={15} p={6}>
              {" "}
              + Add Agent
            </Button>
          </ButtonGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              mt="1"
              children={<Search2Icon color="gray.300" />}
            />
            <Input w={40} py="6" type="text" placeholder="Search..." />
          </InputGroup>
        </ButtonGroup>
      </Flex>

      {/* data table filter tab button */}
      <TableFilterBtn data={tableFilterBtnList} />
    </Box>
  );
};

export default TravelAgentList;

const TableFilterBtn = ({ data }) => {
  return (
    <Flex mt="10" minWidth="max-content" alignItems="center" gap="2">
      {/* <Box p="2">
        <Stack direction={["column", "row"]} spacing="24px">
          {data &&
            data.map((item) => (
              <Box
                cursor="pointer"
                // bg="white"
                _hover={{
                  bg: "secondary",
                }}
                p="4"
                px="8"
                borderRadius={18}
              >
                <Box mb="5">
                  <Badge
                    p="3"
                    borderRadius={8}
                    bg="white"
                    variant="outline"
                    colorScheme="green"
                  >
                    {item.total}
                  </Badge>
                </Box>
                <Text
                  fontSize={{ base: "30px", md: "40px", lg: "25px" }}
                  as="b"
                  color="white"
                  isTruncated
                >
                  {item.name}
                </Text>
              </Box>
            ))}
        </Stack>
      </Box> */}
      <FilterBtn />
      <Spacer />

      <ButtonGroup size="sm" isAttached variant="outline">
        <Button bg="secondary" color="white" borderRadius={12} px={10} py={6}>
          Export
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

/// radio btn card

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

/// radio btn

function FilterBtn() {
  const options = ["react", "vue", "svelte"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}

render(<FilterBtn />);
