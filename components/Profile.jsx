"use client";

import React from "react";
import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  console.log(data);
  return (
    <div>
      {data.map((post) => (
        <>
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={() => {}}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        </>
      ))}
    </div>
  );
};

export default Profile;
