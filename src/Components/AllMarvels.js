
import SinglePoster from './SinglePoster'


function AllMarvels(props) {

    return (
        <div>
            <h1> This is home page</h1>
            {props.marvelPics}
            <SinglePoster
                addToFavorites={() => props.addToFavorites(props.selectedCharacter)}
                name={props.selectedCharacter.name}
                pic={props.selectedCharacter.thumbnail}
                description={props.selectedCharacter.description} />

        </div>
    )


}
export default AllMarvels
