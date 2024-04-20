import "./Meme.css";
import { useState } from "react";
import memesData from "../../memesData.js";
    /**
     * Challenge: 
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
     */

function Meme() {
    //const [memeImage, setMemeImage] = useState("")
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
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
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setMeme(prevMeme => {
          return {
            ...prevMeme,
            [name]: type === "checkbox" ? checked : value
          }
        })
        
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
                        name="topText"
                        placeholder="Top Text"
                        onChange={handleChange}
                    ></input>
                </div>
                <div className="meme--input-group">
                    <label className="meme--label" htmlFor="meme--bottom-text">
                        Bottom text
                    </label>
                    <input
                        className="meme--text-input"
                        id="meme--bottom-text"
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        onChange={handleChange}
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
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}

export default Meme;
