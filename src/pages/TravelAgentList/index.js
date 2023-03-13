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
import DataTable from "react-data-table-component";

const color = {
  primary: "#F95700",
  secondary: "#0090C5",
  textPrimary: "#5E6282",
  borderPrimary: "#E7E7E7",
  warning: "",
  danger: "",
  hoverBg: "rgba(249, 87, 0, 0.1);",
};

const customStyles = {
  rows: {
    style: {
      minHeight: "72px",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
      color: color.primary,
      fontWeight: "600",
      fontSize: "1rem",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
};

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

  const columns = [
    {
      name: "Agent id",
      selector: (row) => row.agent_id,
      sortable: true,
      cell: (row) => (
        <Badge color="blue.400">{row.agent_id.toUpperCase()}</Badge>
      ),
    },
    {
      name: "Company name",
      selector: (row) => row.company_name,
      sortable: true,
    },

    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "Sales person",
      selector: (row) => row.sales_person,
      sortable: true,
    },

    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <>
          <Badge
            px="5"
            py="3"
            borderRadius={7}
            bg={
              row.status.toUpperCase() === "ACTIVE"
                ? "green.100"
                : row.status.toUpperCase() === "PENDING"
                ? "orange.200"
                : row.status.toUpperCase() === "DEACTIVE"
                ? "red.100"
                : ""
            }
            color={
              row.status.toUpperCase() === "ACTIVE"
                ? "green.500"
                : row.status.toUpperCase() === "PENDING"
                ? "orange.500"
                : row.status.toUpperCase() === "DEACTIVE"
                ? "red.500"
                : ""
            }
          >
            {row.status.toUpperCase()}
          </Badge>
        </>
      ),
    },
  ];

  const data = [
    {
      agent_id: "AVC12345",
      company_name: "Tecblic pvt ltd",
      city: "Ahemdabad",
      sales_person: "Ankit",
      status: "Active",
    },
    {
      agent_id: "AVC12980",
      company_name: "Xyz pvt ltd",
      city: "Gandhinagar",
      sales_person: "Het",
      status: "PENDING",
    },
    {
      agent_id: "AVU1754",
      company_name: "Abc pvt ltd",
      city: "Baroda",
      sales_person: "Vaibhav",
      status: "DEACTIVE",
    },
  ];

  return (
    <Box
      borderRadius={25}
      m={{ base: "90px 0px", md: "112px 0px", lg: "112px 0px" }}
      h="calc(100vh - 0vh)"
      w="100%"
      p={6}
      bg="white"
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
            <Button borderRadius={15} p={6} color="#ADB8CC">
              {" "}
              + Add Agent
            </Button>
          </ButtonGroup>

          {/* <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              mt="1"
              children={<Search2Icon color="gray.300" />}
            />
            <Input w={40} py="6" type="text" placeholder="Search..." />
          </InputGroup> */}
        </ButtonGroup>
      </Flex>

      {/* data table filter tab button */}
      {/* <TableFilterBtn data={tableFilterBtnList} /> */}

      {/* table */}

      <Box mt="16">
        <Table data={data} columns={columns} />
      </Box>
    </Box>
  );
};

export default TravelAgentList;

const TableFilterBtn = ({ data }) => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <FilterBtn />
      <Spacer />

      <Flex gap="2">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            mt="1"
            children={<Search2Icon color="gray.300" />}
          />
          <Input
            w={40}
            py="6"
            type="text"
            borderRadius={20}
            placeholder="Search..."
          />
        </InputGroup>

        <ButtonGroup size="sm" isAttached variant="outline">
          <Button bg="secondary" color="white" borderRadius={12} px={10} py={6}>
            Export
          </Button>
        </ButtonGroup>
      </Flex>
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
        borderRadius="16"
        // boxShadow="md"
        borderColor="borderPrimary"
        _checked={{
          bg: "secondary",
          color: "white",
          borderColor: "",
        }}
        _focus={
          {
            // boxShadow: "outline",
          }
        }
        px={8}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

/// radio btn

function FilterBtn() {
  const options = [
    {
      name: "Activated Agents",
      totalCount: 10,
    },
    {
      name: "Approval Pending",
      totalCount: 25,
    },
    {
      name: "Deactivated Pending",
      totalCount: 20,
    },
  ];

  const filterTab = (val) => {
    console.log("filterTab", val);
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    // name: "framework",
    defaultValue: "Activated Agents",
    onChange: filterTab,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        // const radio = getRadioProps({ name, totalCount });
        return (
          <RadioCard
            key={value.name}
            {...getRadioProps({
              value: value.name,
            })}
          >
            <>
              <Badge
                p="2"
                mb={5}
                borderRadius={8}
                bg="white"
                variant="outline"
                border="borderPrimary"
                color="secondary"
              >
                {value.totalCount}
              </Badge>

              <Box>{value.name}</Box>
            </>
          </RadioCard>
        );
      })}
    </HStack>
  );
}

// render(<FilterBtn />);

// }, [filterText, resetPaginationToggle, data, selectedRows]);

function Table({ data, columns }) {
  const handleSort = (column, sortDirection) =>
    console.log(column.selector, sortDirection);

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

  const subHeaderComponentMemo = React.useMemo(() => {
    // const handleClear = () => {
    //   if (filterText) {
    //     setResetPaginationToggle(!resetPaginationToggle);
    //     setFilterText("");
    //   }
    // };

    // const filterText = (e) => {
    //   console.log("on filter text ", e.target.value);
    //   setFilterText(e?.target?.value);
    // };

    // const onSelectFilter = (val, type) => {
    //   //  console.log("for testing ---> ", val);

    //   // filteredItemsOnSelect(val);
    //   onChangeDropDownFilter(val, type);
    // };

    return (
      // <FilterComponent
      //   onFilter={(val) => {
      //     console.log("testing on search text ---> -=", val);
      //     setFilterText(val);
      //     onSearchFilter(val);
      //   }}
      //   filterOnSelect={(val, type) => onSelectFilter(val, type)}
      //   onClear={handleClear}
      //   selectedRows={selectedRows}
      //   filterText={filterText}
      //   dropDownData={dropDownData}
      //   handleDelete={handleDelete}
      //   showSearchFilter={showSearchFilter}
      //   showSubHeaderDropDownFilter={showSubHeaderDropDownFilter}
      // />

      <Box w="100%" mb={10}>
        <TableFilterBtn data={tableFilterBtnList} />
      </Box>
    );
  }, [data]);

  return (
    <DataTable
      striped={true}
      highlightOnHover={true}
      fixedHeader={true}
      fixedHeaderScrollHeight="300px"
      columns={columns}
      data={data}
      onSort={handleSort}
      customStyles={customStyles}
      subHeader={true}
      subHeaderComponent={subHeaderComponentMemo}
    />
  );
}
