/* eslint-disable react/jsx-no-target-blank */
import { CodeSimple, Copyright, GithubLogo } from "@phosphor-icons/react";
import image1 from "../../assets/henry.png";
// import "./footer.css";

export default function Footer(props) {
  return (
    <div>
      <section>
        <span className="count">
          <p className="characters">
            Characters: <b className="total">{props.characterCount} </b>
          </p>
          <p>
            API from: <a href="https://rickandmortyapi.com">RickAndMoryAPI</a>
          </p>
        </span>

        <span className="icons">
          <a
            href="https://github.com/JJGarciaMartinez/rickAndMorty"
            target="_blank"
          >
            <GithubLogo size={25} className="icon" />
          </a>
          <a href="https://www.soyhenry.com" target="_blank">
            <img src={image1} alt="SoyHenryLogo" />
          </a>
        </span>

        <span className="credits">
          <p className="code">
            <CodeSimple size={20} className="icon" /> by
            <a href="https://github.com/JJGarciaMartinez" target="_blank">
              Juan García{" "}
            </a>{" "}
            2023
          </p>
          <p className="copyright">
            <Copyright size={20} /> 2022 Rick and Morty
          </p>
        </span>
      </section>
    </div>
  );
}
