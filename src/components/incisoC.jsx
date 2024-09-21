//Desarrollando la vista para inciso C.
//Objetos literales e interfaces
//Creando nuestro objeto
const game = {
    name: 'Destiny 2',
    genre: 'MMOFPS',
    yearlaunch: 2014,
    additionalData: {
        developer: 'Bungie',
        platformPreferred: 'Steam',
    }
};
const IncisoC = () => {
    console.log("JSON Videogame: ", JSON.stringify(game, null, 2))
    return (
        <>
            <div>
                <h2>
                    Programa a base de Objetos Literales
                </h2>
                <p>
                    <code>
                        <pre>
                            {/* Aqui se muestra
                                el contenido de nuestro
                                videojuego en formato JSON */}
                            {JSON.stringify(game, null, 2)}
                        </pre>
                    </code>
                </p>
            </div>
        </>
    )
};
export default IncisoC;
