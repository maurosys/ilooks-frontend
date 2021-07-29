import { useState, useEffect } from "react";
import Link from "next/link";

const AddsModal = () => {
  const [open, setOpen] = useState(false);
  const [showFirst, setShowFirst] = useState(0);

  useEffect(() => {
    if (showFirst === 0) {
      setOpen(true);
      setShowFirst(1);
    } else {
      return;
    }
  }, []);

  // console.log(showFirst)

  const closeModal = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <div className={`bts-popup ${open ? "is-visible" : ""}`} role="alert">
      <div className="bts-popup-container">
        <h3>Não perca nenhuma novidade!</h3>
        <p>
          Se inscreva no nosso newsletter e{" "}
          <strong>Receba ofertas exclusivas</strong>
        </p>

        <form>
          <input
            type="email"
            className="form-control"
            placeholder="exemplo@exemp"
            name="EMAIL"
            required={true}
          />
          <button type="submit">
            <i className="far fa-paper-plane"></i>
          </button>
        </form>

        <ul>
          <li>
            <Link href="https://www.facebook.com/ILooks_Oficial-109689344531318">
              <a className="facebook" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/ilooksmodaoficial/">
              <a className="instagram" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
            </Link>
          </li>
        </ul>

        <div className="img-box">
          <img src={require("../../images/women.png")} alt="image" />
          <img src={require("../../images/women2.png")} alt="image" />
        </div>

        <Link href="#">
          <a onClick={closeModal} className="bts-popup-close"></a>
        </Link>
      </div>
    </div>
  );
};

export default AddsModal;
