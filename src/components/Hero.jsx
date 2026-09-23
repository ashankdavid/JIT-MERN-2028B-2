import { Link } from "react-router";

function Hero({ title, description }) {
    return (
        <section className="hero">
            <p className="hero-label">
                College Events and Clubs
            </p>

            <h1>{title}</h1>

            <p className="hero-description">
                {description}
            </p>

            <Link
                className="hero-button"
                to="/events"
            >
                Explore Events
            </Link>
        </section>
    );
}

export default Hero;