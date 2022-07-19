/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks"

export default function AddToList({ pokemon }: { pokemon }) {
    const [pokeAdd, setPokeAdd] = useState([]);

    const add = (poke) => {
        setPokeAdd(old => [...old, poke])
    }

    return (
        <button
            onClick={() => add(pokemon)}
        >
            Add To List
        </button>
    );
}