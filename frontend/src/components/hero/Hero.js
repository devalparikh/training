const Hero = () => {
  return (
    <div className="hero flex justify-center flex-wrap min-h-screen bg-base-100 text-base-content">
      <div className="hero-content ">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome to <br />
            DP Learning!
          </h1>
          <p className="mb-5">
            Start your technology career with no prior experience!
            <br /> Learn from industry professionals experienced in Full Stack,
            Cloud, and Machine Learning.
          </p>
          <button
            className="btn btn-secondary"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "#about";
            }}
          >
            Learn More
          </button>
        </div>
      </div>
      <div>
        <img
          // src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2018/04/react-svg-component-library-1.gif?ssl=1"
          src="eng.png"
          className="max-w-sm "
          alt="hero"
        />
        <p className="mb-12 text-center flex justify-center">
          Learn how to acquire <br /> 6-figure work from home job offers!
        </p>
      </div>
    </div>
  );
};

export default Hero;
