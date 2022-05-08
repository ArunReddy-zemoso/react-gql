import { useQuery, gql } from "@apollo/client"

const GRT_CHARACTERS = gql`
query{
  characters{
    results{
      id
      name
      image
      gender
    }
  }
}
`;

export const useCharacters = () => {
    const {error, data, loading} = useQuery(GRT_CHARACTERS);

    return {error, data, loading};
};