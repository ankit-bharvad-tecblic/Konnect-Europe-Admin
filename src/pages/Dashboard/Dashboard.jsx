import {
  Box,
  Card,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { group, mainTik, screen } from "../../assets/icons";

const Dashboard = () => {
  const bookings = [
    {
      title: "Holiday Booking",
      date: "16-08-2022",
      viewType: "Daily View",
      details: [
        {
          icon: group,
          title: "Total Hotel booking",
          number: "1,893",
        },
        {
          icon: mainTik,
          title: "Total Hotel booking",
          number: "1,893",
        },
        {
          icon: screen,
          title: "Total Hotel booking",
          number: "1,893",
        },
      ],
    },
    {
      title: "Holiday Booking",
      date: "16-08-2022",
      viewType: "Yearly View",
      details: [
        {
          icon: group,
          title: "Total Hotel booking",
          number: "1,893",
        },
        {
          icon: mainTik,
          title: "Total Hotel booking",
          number: "1,893",
        },
        {
          icon: screen,
          title: "Total Hotel booking",
          number: "1,893",
        },
      ],
    },
    {
      title: "Holiday Booking",
      date: "16-08-2022",
      viewType: "Daily View",
      details: [
        {
          icon: group,
          title: "Total Hotel booking",
          number: "1,893",
        },
        {
          icon: mainTik,
          title: "Total Hotel booking",
          number: "1,893",
        },
        {
          icon: screen,
          title: "Total Hotel booking",
          number: "1,893",
        },
      ],
    },
    {
      title: "Holiday Booking",
      date: "16-08-2022",
      viewType: "Daily View",
      details: [
        {
          icon: group,
          title: "Total Hotel booking",
          number: "1,893",
        },
        {
          icon: mainTik,
          title: "Total Hotel booking",
          number: "1,893",
        },
        {
          icon: screen,
          title: "Total Hotel booking",
          number: "1,893",
        },
      ],
    },
  ];

  return (
    <Box
      borderRadius={25}
      m={{ base: "90px 0px", md: "112px 0px", lg: "112px 0px" }}
      h="calc(100vh - 0vh)"
      w="100%"
      p={0}
      color="white"
    >
      {/* OverallPerformanceCard Start */}
      <OverallPerformanceCard />
      {/* OverallPerformanceCard End */}

      {/* HolidayBookingCard Start */}
      <HolidayBooking data={bookings} />
      {/* HolidayBookingCard End */}
    </Box>
  );
};

export default Dashboard;

// ============================ Inner Components Start ==================

/* OverallPerformanceCard Inner Component Start 1 */

const OverallPerformanceCard = () => {
  const hotelsDetailsCard = [
    {
      icon: group,
      title: "Total Holiday Package",
      number: "5,423",
    },
    {
      icon: mainTik,
      title: "Total Hotel booking",
      number: "1,893",
    },
    {
      icon: screen,
      title: "Total Sight seen",
      number: "658",
    },
  ];
  return (
    <Box
      height={{ base: "500px", md: "260px", lg: "240px" }}
      p="8"
      borderRadius={17}
      bg="#fff"
    >
      <Text
        fontSize={{ base: "30px", md: "40px", lg: "36px" }}
        as="b"
        color="secondary"
        isTruncated
      >
        Overall Perfomance
      </Text>

      <Flex
        p={{ base: 0, md: 0 }}
        w="100%"
        gap={7}
        direction={{ base: "column-reverse", md: "row" }}
      >
        {hotelsDetailsCard.map((el) => (
          <Box
            w="100%"
            m={{ base: "10px 0px", md: "11px 0px", lg: "11px 0px" }}
          >
            <HotelsDetailsCard details={el} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

const HotelsDetailsCard = ({ details }) => {
  return (
    <Card
      border={{ borderRightColor: "red", borderRight: "2px" }}
      borderRadius="0"
      boxShadow=""
      borderBottom={60}
    >
      <Flex w="100%" gap="3" alignItems="center" p="2">
        <Box borderRadius="50" bg="#F4F5F7">
          <Image
            sx={{ mx: "auto" }}
            p="5"
            objectFit="cover"
            src={details.icon}
            alt="logo"
          />
        </Box>

        <Box>
          <Text size="sm" color="textPrimary">
            {details.title}
          </Text>
          <Heading color="secondary">{details.number}</Heading>
        </Box>
      </Flex>
    </Card>
  );
};

/* OverallPerformanceCard Inner Component End  1*/

/* #### ------------------------------------------------------ #### */

/* Holiday Booking Inner Component Start 2 */

/* <Box bg="tomato" height="80px"></Box> */

const HolidayBooking = ({ data }) => {
  return (
    <Box
      //height={{ base: "500px", md: "260px", lg: "360px" }}
      p="8"
      mt={22}
      borderRadius={17}
      bg="#fff"
    >
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2, xl: 3 }} spacing={10}>
        {data.map((el) => (
          <HolidayBookingCard item={el} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

const HolidayBookingCard = ({ item }) => {
  return (
    <Box
      borderRadius={17}
      p={4}
      border="1px"
      borderColor="#e3e3e3"
      //  height="80px"
    >
      <Flex
        // direction={{ base: "column", sm: "flex" }}
        justifyItems="center"
        justifyContent="space-between"
      >
        <Text
          fontSize={{ base: "30px", md: "40px", lg: "25px" }}
          as="b"
          color="secondary"
          isTruncated
        >
          {item.title}
        </Text>

        <Box
          color="#ACACAC"
          // border="1px"
          p="9px 20px"
          // borderColor="red"
          borderRadius="20"
          bg="#F4F5F7"
        >
          {item.date}
        </Box>
      </Flex>

      <Box mt="20px">
        <Text
          fontSize={{ base: "20px", md: "25px", lg: "18px" }}
          as="l"
          color="primary"
          isTruncated
        >
          {item.viewType}
        </Text>

        <VStack spacing={4} align="stretch" mt={10}>
          {item.details.map((detail) => (
            <Box>
              <Flex w="100%" gap="3" alignItems="center" p="2">
                <Box borderRadius="50" bg="#F4F5F7">
                  <Image
                    sx={{ mx: "auto" }}
                    p="5"
                    objectFit="cover"
                    src={detail.icon}
                    alt="logo"
                  />
                </Box>

                <Box>
                  <Text size="sm" color="#ACACAC">
                    {detail.title}
                  </Text>
                  <Heading color="secondary">{detail.number} </Heading>
                </Box>
              </Flex>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

/* Holiday Booking Inner Component End 2 */
