import { useState } from "react";
import { Input } from "./components/Input";
import { BiSearchAlt } from "react-icons/bi";
import { Heading } from "./components/Heading";
import Pokeball from "./assets/pokeball.svg";
import { PokemonCard } from "./components/PokemonCard";
import { api } from "./services/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

interface IPokemon {
  name: string;
  abilities: string[];
}
export default function App() {
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);

  function showError(errorMessage: string) {
    toast.error(errorMessage, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  async function handleSearch() {
    await api
      .get(`/pokemon/${query.toLowerCase()}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((error: AxiosError) => {
        setPokemon(null);
        if (error.response?.status === 404) {
          showError("Oops, o Pókemon digitado não existe!");
        } else {
          showError(
            "Aconteceu um erro inesperado, tente novamente mais tarde!"
          );
        }
      });
  }

  return (
    <div className="bg-[#DC0A2D] min-h-screen h-full flex p-4 lg:px-10 lg:py-24 justify-center">
      <div className="flex gap-8 flex-col w-4/5 md:min-w-1/2 xl:w-2/3">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 ">
          <img src={Pokeball} alt="Pokeball" className="mt-0.5" />
          <Heading content="Pesquise agora as habilidades de qualquer Pokémon!" />
        </div>

        <div className="relative flex w-4/5 md:w-1/2 mx-auto">
          <Input
            value={query}
            setValue={setQuery}
            placeholder="Digite o nome..."
          ></Input>

          <button
            type="button"
            onClick={handleSearch}
            className="text-2xl absolute right-4 bottom-2 text-[#DC0A2D] cursor-pointer transition-all delay-75 hover:scale-125"
          >
            <BiSearchAlt />
          </button>
        </div>

        {pokemon ? (
          <PokemonCard name={pokemon.name} abilities={pokemon.abilities} />
        ) : null}
      </div>
    </div>
  );
}
