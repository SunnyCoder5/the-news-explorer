import './About.css';
import authorImage from '../../assets/author.jpg';

function About() {
  return (
    <section className="about">
      <img src={authorImage} alt="author image" className="about__image" />
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          My name is Mariia Chudakov. I am TripleTen student. Previously I have
          been working in fintech. Throughout this course I have learned HTML 5,
          CSS, JS, React.
        </p>
        <p className="about__text">
          Studying at TripleTen gives me comprehensive hands-on experience in
          full-stack development, modern programming practices, and
          industry-standard.
        </p>
      </div>
    </section>
  );
}

export default About;
