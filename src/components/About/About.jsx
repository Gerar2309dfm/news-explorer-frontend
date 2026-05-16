
import perfil from "../../images/perfil.png";
import "./About.css";

function About() {
  return (
    <section className="about">
      <img
        src={perfil}
        alt="Autor"
        className="about__image"
      />

      <div className="about__content">
        <h2 className="about__title">
          Acerca del autor
        </h2>

        <p className="about__text">
          Este es un proyecto desarrollado con React para explorar noticias
          y practicar desarrollo frontend moderno.
        </p>

        <p className="about__text">
          La aplicación permite buscar noticias y visualizar resultados
          dinámicamente usando una API externa.
        </p>
      </div>
    </section>
  );
}

export default About;