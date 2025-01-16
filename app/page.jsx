import React from "react";
import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center text-sm">
        {" "}
        Smart Farming Solutions!
        <br />
        <span className="text-center bg-gradient-to-r from-green-600 via-yellow-400 to-green-600 bg-clip-text text-transparent">
          AgroGenie
        </span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero
        dolores nostrum itaque, voluptatibus odit necessitatibus autem sunt ex
        molestiae? Vel, ut quas. Enim earum autem exercitationem illo repellat
        sint!
      </p>
      <Feed />
    </section>
  );
};

export default Home;
