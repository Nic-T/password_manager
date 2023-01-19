import React, { useEffect, useState } from "react";

function Folder({ id, name }) {
  const [folderContent, setFolderContent] = useState([]);
  const [folderStatus, setFolderStatus] = useState(false);
  const [fetched, setFetched] = useState(false);

  function getFolderContent(id) {
    const data = { id: id };

    if (fetched === false) {
      fetch("http://localhost:3100/api/folder/get-folder-content", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => setFolderContent(data))
        .then(setFetched(true))
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    setFolderStatus(!folderStatus);
  }
  if (folderStatus === false) {
    return (
      <button onClick={() => getFolderContent(id)}>
        <h1>{name}</h1>
      </button>
    );
  }
  if (folderStatus === true) {
    return (
      <div>
        <button onClick={() => getFolderContent(id)}>
          <h1>{name}</h1>
        </button>
        <div>
          {() => console.log(folderContent)}
          {folderContent.map((content) => (
            <button key={content.id}>{content.name}</button>
          ))}
        </div>
      </div>
    );
  }
}

export default Folder;
