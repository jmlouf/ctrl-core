import React from "react";
import { useQuery } from "@apollo/client";
import { SimpleGrid } from "@chakra-ui/react";
import { QUERY_USERS } from "../utils/queries";
import PortfolioDisplay from "../components/Portfolio/PortfolioDisplay";

const Home = () => {
  const { loading, error, data } = useQuery(QUERY_USERS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <SimpleGrid columns={[1, 2, 3]} spacing='40px'>
      {data.users.map((user) => (
        <PortfolioDisplay key={user._id} user={user} />
      ))}
    </SimpleGrid>
  );
};

export default Home;
