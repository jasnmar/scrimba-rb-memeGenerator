import "./Meme.css"
import { useState } from "react"
import memesData from "../../memesData.js"
    /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */
    
function Meme() {
    const [memeImage, setMemeImage] = useState("")

    function getImage() {
        const memeList = memesData.data.memes
        const randomMeme = Math.floor(Math.random() * memeList.length);
        setMemeImage(memeList[randomMeme].url)
        console.log('selectedMemeURL: ', memeImage)

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
            <img className="meme--image" src={memeImage}></img>
        </main>
    )
}

export default Meme