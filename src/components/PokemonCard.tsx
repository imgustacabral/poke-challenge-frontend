interface PokemonCardProps {
  name: string;
  abilities: string[];
}

export function PokemonCard({ name, abilities }: PokemonCardProps) {
  return (
    <div className="bg-gray-100 rounded w-60 mx-auto flex flex-col gap-4">
      <div className=" bg-gray-200 rounded-t-lg w-full h-1/5 p-6  flex justify-center items-center">
        <p className="font-bold text-gray-700">{name}</p>
      </div>

        <p>Habilidades:</p>
        {abilities.map((ability: string, index: number) => {
          return (
            <div className="text-center p-2" key={index}>
              <p className="border-b border-b-gray-200 px-4">{ability}</p>
            </div>
            
          );
        })}
    </div>
  );
}
