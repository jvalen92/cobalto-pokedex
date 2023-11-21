import Pokemon from '../Pokemon/Pokemon'
import './index.css'

const PokemonContainer = () => {
    //llamar lista de pokemones aqui
    const lista = [{},{}]
  return (
    <div>
        {lista.map((pokemon, index)=>{
            return <Pokemon key={index} pokemon={pokemon} />
        })}
    </div>
  )
}

export default PokemonContainer