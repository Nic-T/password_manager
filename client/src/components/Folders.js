import React, { useEffect, useState } from "react";
import Folder from "../components/Folder";
import AddFolder from "./AddFolder";

function Folders() {
  const [folders, setFolders] = useState([]);
  const [reload, setReload] = useState(1);

  useEffect(() => {
    getFolders();
  }, [reload]);

  const startReload = (reload) => {
    setReload((reload) => reload + 1);
  };

  function getFolders() {
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
  }

  return (
    <div>
      <AddFolder startReload={startReload} />
      <div class="flex flex-col">
        {folders.map((folder) => (
          <Folder name={folder.name} id={folder.id} key={folder.id} />
        ))}
      </div>
    </div>
  );
}

export default Folders;
