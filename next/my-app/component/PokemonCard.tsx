import React from "react";

export default function PokemonCard({
    pokemon,
}) {
    return (
        <div >
            <div >{pokemon.name}</div>
            <div >
                <a href={`/pokemon/${pokemon.id}`}>
                    View Details...
                </a>
                {/* {allowAdd && (
                    <div class={tw`flex-end`}>
                        <AddToList pokemon={pokemon} />
                    </div>
                )} */}
            </div>
        </div>
    );
}
