import img1 from "../assets/img/buy-comics-digital-comics.png"
import img2 from "../assets/img/buy-comics-merchandise.png"
import img3 from "../assets/img/buy-comics-subscriptions.png"
import img4 from "../assets/img/buy-comics-shop-locator.png"
import img5 from "../assets/img/buy-dc-power-visa.svg"

const Main = () => {
    return (
      <>
        <div className="black">
          <div className="container">
            <h2>content goes here</h2>
          </div>
        </div>

        <div className="blue">
          <img src={img1} alt="" />
          <p>DIGITAL COMICS</p>
          <img src={img2} alt="" />
          <p>DC MERCANDISE</p>
          <img src={img3} alt="" />
          <p>SUBSCRIPTION</p>
          <img src={img4} alt="" />
          <p>COMICS SHOP LOCATION</p>
          <img src={img5} alt="" />
          <p>DC POWER VISA</p>
        </div>
      </>
    );
}

export default Main;