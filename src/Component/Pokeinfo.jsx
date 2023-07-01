const Pokeinfo = ({ data }) => {
    return (
        <>

            {
                (!data) ? "" : (
                    <>
                        <h1>{data.name}</h1>
                        <img src={data.sprites.other.dream_world.front_default} alt="" />
                        <div className="abilities">
                            {
                                data.abilities.map((poke) => {
                                    return (
                                        <div className="group" key={poke.id}>
                                            <h2>{poke.ability.name}</h2>
                                        </div>
                                    )

                                })
                            }
                        </div>
                        <div className="base-state">
                            {
                                data.stats.map( (poke) => {
                                    return (
                                        <>
                                            <h3>{poke.stat.name} : {poke.base_stat}</h3>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </>
                )
            }

        </>
    );
}

export default Pokeinfo;