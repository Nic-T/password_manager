import React, { useState } from "react";

function Folder({ id, name }) {
  const [folderContent, setFolderContent] = useState([]);
  const [folderStatus, setFolderStatus] = useState(false);
  const [reload, setReload] = useState(1);
  function getFolderContent(id) {
    const data = { id: id };

    fetch("http://localhost:3100/api/folder/get-folder-content", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => setFolderContent(data))
      .then(setReload(reload + 1))
      .catch((error) => {
        console.error("Error:", error);
      });

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
        <div class="flex flex-col">
          {folderContent.map((content) => (
            <button key={content.id}>{content.name}</button>
          ))}
        </div>
      </div>
    );
  }
}

export default Folder;
