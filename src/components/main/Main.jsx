import { useRef, useState } from "react";

import {
  sad,
  cute,
  intense,
  angry,
  insist,
  eat,
  think,
} from "../../constants/icon";

import { ConfettiComponent } from "../confetti/ConfettiComponent";
import { animate } from "../../helpers/animate";
import { ResponseButton } from "../button/ResponseButton";

const noResponseMsg = [
  "Oh, fallaste, a todos nos puede pasar...",
  "Debe haber un error, vuelve a intentar",
  "No habra vuelta atras",
  "No te arrepientas",
  "No quieres?",
  "Andaleee!!",
  "Se mi san valentin!",
  "Porfiiis... ",
];

export const Main = () => {
  const [yes, setYes] = useState(false);
  const [counterNot, setCounterNot] = useState(0);
  const [btnNotIsVisible, setBtnNotIsVisible] = useState(true);
  const [subtitleText, setSubtitleText] = useState("Responde con sabiduria");
  const [image, setImage] = useState(cute);

  const imageRef = useRef(null)

  const handleNoResponse = (e) => {
    const button = e.target;

    setImage(sad);

    animate(button, "shake");

    if (counterNot < noResponseMsg.length) {
      setSubtitleText(noResponseMsg[counterNot]);
      setCounterNot(counterNot + 1);

      switch (counterNot) {
        case 0:
          setImage(eat);
          break;
        case 1:
          setImage(think);
          break;
        case noResponseMsg.length - 1:
          setImage(insist);
          break;
        default:
          break;
      }
    } else {
      setSubtitleText("No me dejas otra opcion");
      setTimeout(() => {
        setBtnNotIsVisible(false);
      }, 500);
      button.style.animation = "delete .5s ease both";
      setImage(angry);
      animate(imageRef.current, 'shake')
    }
  };

  const handleYesResponse = () => {
    setCounterNot(0);
    setSubtitleText("SIII!! Te quiero muchooo!!");
    setImage(intense);
    setBtnNotIsVisible(false);
    setYes(true);
  };

  return (
    <section className="main__section">
      <ConfettiComponent yes={yes} />

      <article className="section__article">
        <h1 className="section__title">¿Quieres ser mi San valentin?</h1>

        <div
          ref={imageRef}
          className="section__image"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>

        <div className="section__subtitle">
          <p>{subtitleText}</p>
        </div>

        <div className="section__controller">
          <ResponseButton newClass="btn-yes" onClick={handleYesResponse}>
            Si
          </ResponseButton>

          {btnNotIsVisible && (
            <ResponseButton newClass="btn-not" onClick={handleNoResponse}>
              No
            </ResponseButton>
          )}
        </div>
      </article>
    </section>
  );
};
