import React, { useEffect, useState } from "react";
import Folder from "../components/Folder";

function Folders() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/api/folder/get-folders", {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    })
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        setFolders(data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <div>
      <div class="flex flex-col">
        {folders.map((folder) => (
          <Folder name={folder.name} id={folder.id} key={folder.id} />
        ))}
      </div>
    </div>
  );
}

export default Folders;
