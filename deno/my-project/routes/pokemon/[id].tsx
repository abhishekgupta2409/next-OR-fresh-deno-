/** @jsx h */
import { Handlers, PageProps } from "$fresh/server.ts";
import { h, Fragment } from "preact";
import { tw } from "@twind";


export const handler: Handlers<{
    pokemon;
}> = {
    async GET(_req, ctx) {
        console.log(ctx.params.id)
        const pokemon = await fetch(
            `https://jsonplaceholder.typicode.com/users/${ctx.params.id}`
        ).then((res) => res.json());
        console.log(pokemon)
        if (!pokemon) {
            return new Response("Pokemon search failed", { status: 404 });
        }
        return ctx.render({ pokemon: pokemon });
    },
};

export default function Details(
    props: PageProps<{
        pokemon: any;
    }>
) {
    const pokemon = props.data.pokemon;
    console.log('pokemon', pokemon)
    return (
        <div class={tw`mx-auto max-w-screen-xl`}>

            <div class={tw`grid xs:grid-cols-1 md:grid-cols-2 gap-5`}>
                <div>
                    <div class={tw`text-5xl font-bold`}>{pokemon.name}</div>
                    <div class={tw`text-3xl font-italic`}>
                        {pokemon.email}
                    </div>

                </div>
            </div>
        </div>
    );
}