import "./Meme.css"
import memesData from "../../memesData.js"
    /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */
function Meme() {

    function getImage() {
        const memeList = memesData.data.memes
        const randomMeme = Math.floor(Math.random() * memeList.length);
        const selectedMemeURL = memeList[randomMeme].url
        console.log('selectedMemeURL: ', selectedMemeURL)

    }
    return (
        <main>
            <div className="meme--text-inputs">
                <div className="meme--input-group">
                    <label 
                        className="meme--label" 
                        htmlFor="meme--top-text">
                            Top text
                    </label>
                    <input 
                        className="meme--text-input" 
                        id="meme--top-text" 
                        type="text" 
                        name="top" 
                        placeholder="Top Text"></input>
                </div>
                <div className="meme--input-group">
                    <label 
                        className="meme--label" 
                        htmlFor="meme--bottom-text">
                            Top text
                    </label>
                    <input 
                        className="meme--text-input" 
                        id="meme--bottom-text" 
                        type="text" 
                        name="bottom" 
                        placeholder="Bottom Text"></input>
                    </div>
                </div>
            <button 
                onClick={getImage} className="meme-submit-btn" 
                type="submit">
                    Get a new meme image  🖼
            </button>

        </main>
    )
}

export default Meme