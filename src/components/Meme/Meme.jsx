import "./Meme.css"

function Meme() {
    return (
        <main>
            <form>
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
                            htmlFor="meme--top-text">
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
                <button className="meme-submit-btn" type="submit">Get a new meme image  🖼</button>
            </form>
        </main>
    )
}

export default Meme