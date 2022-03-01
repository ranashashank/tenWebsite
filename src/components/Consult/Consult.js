import React from "react";

const Consult = () => {
  return (
    <div className="consult">
      <div className="video-container">
        <video
          role="presentation"
          crossOrigin="anonymous"
          playsInline
          preload="auto"
          muted
          loop
          autoPlay
          src="https://video.wixstatic.com/video/11062b_79271b7012564ed497d2774a895ab7fd/720p/mp4/file.mp4"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            opacity: 1,
          }}
        ></video>
      </div>
      <div className="text-container">
        <h1>Power of TEN Consulting</h1>
        <a
          href="https://www.consulting.entrepreneurshipnetwork.net/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn text-center">
            <span>Explore Here</span>
            <span>
              <svg
                data-bbox="13.05 2.55 33.878 54.8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 60"
              >
                <g>
                  <path d="M46.5 28.9L20.6 3c-.6-.6-1.6-.6-2.2 0l-4.8 4.8c-.6.6-.6 1.6 0 2.2l19.8 20-19.9 19.9c-.6.6-.6 1.6 0 2.2l4.8 4.8c.6.6 1.6.6 2.2 0l21-21 4.8-4.8c.8-.6.8-1.6.2-2.2z"></path>
                </g>
              </svg>
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Consult;
