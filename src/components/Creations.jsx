const Creations = () => {
    return (
        <section className="creations">
            <div className="row">
                <div>
                    <h2>Our Creations</h2>
                </div>
                <div className="btn"><a href="/">View All</a></div>
            </div>

            <div className="row">
                <div>
                    <img src="images/desktop/image-deep-earth.jpg" alt="Earth" />
                    <h4>Deep Earth</h4>
                </div>
                <div>
                    <img src="images/desktop/image-night-arcade.jpg" alt="Night Arcade" />
                    <h4>Night Arcade</h4>
                </div>
                <div>
                    <img src="images/desktop/image-soccer-team.jpg" alt="Soccer" />
                    <h4>Soccer Team</h4>
                </div>
                <div>
                    <img src="images/desktop/image-grid.jpg" alt="Grid" />
                    <h4>Grid</h4>
                </div>
            </div>
            <div className="row">
                <div>
                    <img src="images/desktop/image-from-above.jpg" alt="Birdeye view" />
                    <h4>From Up Above</h4>
                </div>
                <div>
                    <img src="images/desktop/image-pocket-borealis.jpg" alt="Pocket Borealis" />
                    <h4>Pocket Borealis</h4>    
                </div>
                <div>
                    <img src="images/desktop/image-curiosity.jpg" alt="Curiosity" />
                    <h4>Curiosity</h4>
                </div>
                <div>
                    <img src="/images/desktop/image-fisheye.jpg" alt="Fish Eye" />
                    <h4>Fish Eye</h4>
                </div>
            </div>
        </section>
    )
}

export default Creations;