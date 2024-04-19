import "./Meme.css";
import { useState } from "react";
import memesData from "../../memesData.js";
/**
 * Challenge: Update our state to save the meme-related
 * data as an object called `meme`. It should have the
 * following 3 properties:
 * topText, bottomText, randomImage.
 *
 * The 2 text states can default to empty strings for now,
 * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
 *
 * Next, create a new state variable called `allMemeImages`
 * which will default to `memesData`, which we imported above
 *
 * Lastly, update the `getMemeImage` function and the markup
 * to reflect our newly reformed state object and array in the
 * correct way.
 */

function Meme() {
    //const [memeImage, setMemeImage] = useState("")
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });
    const [allMemeImages, setAllMemeImages] = useState(memesData);

    function getImage() {
        const memeList = allMemeImages.data.memes;
        const randomMeme = Math.floor(Math.random() * memeList.length);
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: memeList[randomMeme].url,
            };
        });
    }
    return (
        <main>
            <div className="meme--text-inputs">
                <div className="meme--input-group">
                    <label className="meme--label" htmlFor="meme--top-text">
                        Top text
                    </label>
                    <input
                        className="meme--text-input"
                        id="meme--top-text"
                        type="text"
                        name="top"
                        placeholder="Top Text"
                    ></input>
                </div>
                <div className="meme--input-group">
                    <label className="meme--label" htmlFor="meme--bottom-text">
                        Top text
                    </label>
                    <input
                        className="meme--text-input"
                        id="meme--bottom-text"
                        type="text"
                        name="bottom"
                        placeholder="Bottom Text"
                    ></input>
                </div>
            </div>
            <button
                onClick={getImage}
                className="meme-submit-btn"
                type="submit"
            >
                Get a new meme image 🖼
            </button>
            <img className="meme--image" src={meme.randomImage}></img>
        </main>
    );
}

export default Meme;
