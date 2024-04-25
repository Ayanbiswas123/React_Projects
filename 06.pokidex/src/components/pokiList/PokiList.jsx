import { useEffect, useState } from "react";
import axios from 'axios';
import Pokemon from "../pokemon/pokemon";
import './PokeList.css'

function PokiList() {

    const [pokemonlist, setpokemonlist] = useState([])
    const [isloading, setisloding] = useState(false)
    const [mainURL, setMainURL] = useState('https://pokeapi.co/api/v2/pokemon')
    const [PrevURL, setPrevURL] = useState('')
    const [NextURL, setNextURL] = useState('')



    async function downloadpokemon() {
        setisloding(false)
        const response = await axios.get(mainURL)
        console.log(response.data);
        setNextURL(response.data.next)
        setPrevURL(response.data.previous)
        const pokemonResults = response.data.results;

        const pokemonResuleURL = pokemonResults.map((pokemon) => axios.get(pokemon.url))
        //console.log(pokemonResuleURL);
        const pokemonData = await axios.all(pokemonResuleURL)
        //console.log(pokemonData);
        const res = (pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;

            return {
                id: pokemon.id,
                name: pokemon.name,
                image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : "/pic/pic_1.png",
                get image2() {
                    return "data:image/jpeg;base64,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"
                },
                set image2(value) {
                    this._image2 = value;
                },
                types: pokemon.types,

            }
        }))
        console.log(res);
        setpokemonlist(res)
        setisloding(true)
    }

    function call() {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then((res) => res.json())
            .then((data) => data.results)
            .then((allURL) => {
                const pokemonResuleURL = allURL.map((pokemon) => fetch(pokemon.url))
                console.log(pokemonResuleURL);
            })

    }

    useEffect(() => {

        downloadpokemon()
        //call()
    }, [mainURL])



    return (
        <>
            <div className="main">
            <span>Pokemon list</span>
            <br />
            <span className="span2">{(isloading) ? "Data Downloaded" : "Loadding ..."}</span>
            </div>
            <div className="pokemon-load">
                {pokemonlist.map((p) => <Pokemon name={p.name} image={p.image2} id={p.id} />)}
            </div>
            <div className="load-btn">
                <button disabled={PrevURL == null}
                    onClick={() => setMainURL(PrevURL)}>
                    Prev
                </button>
                <button disabled={NextURL == null}
                    onClick={() => setMainURL(NextURL)}
                >
                    Next
                </button>
            </div>
        </>
    )
}

export default PokiList;