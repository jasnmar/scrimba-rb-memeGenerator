import "./Meme.css";
import { useState, useEffect } from "react";
    /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */

function Meme() {
    //State for the text and meme image
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });
    //State for the memes list
    const [allMemes, setAllMemes] = useState("");

    //Only get a new list when the form loads
    useEffect(() => {
        async function getMemesData() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemesData()
    }, [] )


    function getImage() {
        const randomMeme = Math.floor(Math.random() * allMemes.length);
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: allMemes[randomMeme].url,
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
                        value={meme.topText}
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
                        value={meme.bottomText}
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
