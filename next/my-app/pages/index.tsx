import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PokemonCard from '../component/PokemonCard'
import styles from '../styles/Home.module.css'

const Home: NextPage = (props) => {
  const { pokemon } = props;
  return (
    <div>
      <form >
        {/* <input
          type="text"
          name="q"
          value={""}
        /> */}
        <button
          type="submit"
        >
          Search
        </button>
      </form>

      <div>
        {pokemon?.map((poke, index) => (
          <div key={poke.id}> <PokemonCard pokemon={poke} /></div>

        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const pokemon = await fetch(
    `https://jsonplaceholder.typicode.com/users`
  ).then((res) => res.json());

  return {
    props: {
      pokemon
    },
  }
}
export default Home
