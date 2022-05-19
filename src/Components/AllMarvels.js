import SinglePoster from './SinglePoster'

function AllMarvels(props) {

    return (
        <div>
            <h1> Select your favorite Marvel character !</h1>
            <main className='homepage'>
            <div> {props.marvelPics} </div>
            <div>
                <SinglePoster
                    addToFavorites={() => props.addToFavorites(props.selectedCharacter)}
                    name={props.selectedCharacter.name}
                    pic={props.selectedCharacter.thumbnail}
                    description={props.selectedCharacter.description} />
            </div>
            </main>
        </div>
    )


}
export default AllMarvels
