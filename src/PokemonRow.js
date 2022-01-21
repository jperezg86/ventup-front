import axios from "axios";
import React from "react";

const PokemonRow = ({ pokemon }) => {
  const [details, setDetails] = React.useState(null);

  const getActiveAbilities = () => {
    return details?.abilities
      ?.map((ability) => {
        if (ability.is_hidden === false) {
          return ability.ability.name;
        }
      })
      .join(",");
  };

  React.useEffect(() => {
    const getPokemonDetail = async () => {
      const { data } = await axios.get(pokemon.url);
      setDetails(data);
    };
    if (pokemon?.url) {
      getPokemonDetail();
    }
  }, [pokemon]);

  return (
    <tr key={details?.id}>
      <td>{details?.name}</td>
      <td>{details?.weight}</td>
      <td>{details?.height}</td>
      <td>{details?.abilities.length}</td>
      <td>{getActiveAbilities()}</td>
    </tr>
  );
};

export default PokemonRow;
