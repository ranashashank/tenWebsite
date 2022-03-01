import React from "react";

const Welcome = () => {
  return (
    <section className="welcome-section text-center">
      <h2 className="pt-4">Welcome to</h2>
      <h1 className="mb-5">the next big thing</h1>
      <div className="line"></div>
      <a href="https://discord.gg/A8zBusy" target="_blank" rel="noreferrer">
        <button className="btn py-3 px-5 mt-3">Join TEN Virtual Campus</button>
      </a>
    </section>
  );
};

export default Welcome;
