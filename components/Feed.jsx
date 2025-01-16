"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchText = (e) => {};
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("api/prompt/new");
        if (!res.ok) {
          console.log("Error fetching data");
        }
        const result = await res.json();
        setPosts(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a solution!"
          value={searchText}
          onChange={handleSearchText}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
    /*
    <>
      {data &&
        Object.values(data).map((value, index) => (
          <div key={index}>
            <p> {value.prompt} </p>
            <h2> {value.creator}</h2>
          </div>
        ))}
    </> */
  );
};

export default Feed;
