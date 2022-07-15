import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as SlideActions from "../../store/actions/slide"
import Slide from "./Slide";

const Painel = ({pokemonSelected, pokemons, setItens}) => {

    console.log(pokemons)

    

    useEffect(() => {
        setItens(pokemons)
    }, [])
    
    return (
        <div>
            <h1>Painel</h1>
            <h1>{pokemonSelected.name}</h1>
            <Slide></Slide>
            <Link to="/gallery">Voltar</Link>
        </div>
    )
}

const mapStateToProps = state => ({
    pokemonSelected: state.pokemon.pokemonSelected,
    pokemons: state.pokemon.pokemons
})

const mapDispatchToProps = dispatch => (
    bindActionCreators(SlideActions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Painel)