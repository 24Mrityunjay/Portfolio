import './ScrollUp.css';
import { FaArrowUp } from "react-icons/fa6";

const ScrollUp = () => {
  function scrollFunc() {
    const scrollUp = document.querySelector(".scrollup");
    if (window.scrollY >= 560) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  }
  window.addEventListener("scroll", scrollFunc);
  return (
    // <a
    //   href="#"
    //   className="scrollup"
    //   target="_blank"
    // >
    //   <FaArrowUp className='scrollup_icon'/>
    // </a>
    <button className="scrollup" onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }>
      <FaArrowUp className='scrollup__icon' />
    </button>
  )
}

export default ScrollUp