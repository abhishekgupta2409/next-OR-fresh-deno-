
/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import AddToList from "../islands/AddToList.tsx";

// import AddToList from "../islands/AddToList.tsx";

export default function PokemonCard({
    pokemon,
    allowAdd,
}: {
    pokemon;
    allowAdd?: boolean;
}) {
    return (
        <div class={tw`rounded-xl border-1 p-5`}>
            <div class={tw`text-2xl font-bold mb-2`}>{pokemon.name}</div>
            <div class={tw`mt-5 flex`}>
                <a class={tw`underline flex-grow`} href={`/pokemon/${pokemon.id}`}>
                    View Details...
                </a>
                {allowAdd && (
                    <div class={tw`flex-end`}>
                        <AddToList pokemon={pokemon} />
                    </div>
                )}
            </div>
        </div>
    );
}
