const Arrow = ({ currentSlide, slideCount, ...props }) => (
  <button {...props}>
    <svg viewBox="0 0 21 41">
      <path d="M20.3 40.8L0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path>
    </svg>
  </button>
);

export default Arrow;
