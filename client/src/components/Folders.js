import React, { useEffect } from "react";
import Folder from "../components/Folder";
import AddFolder from "./AddFolder";
import { useRecoilState } from "recoil";

import { foldersState } from "../stores/foldersAtom";
import { checkState } from "../stores/checkAtom";

function Folders() {
  const [folders, setFolders] = useRecoilState(foldersState);
  const [check, setCheck] = useRecoilState(checkState);

  useEffect(() => {
    getFolders();
  }, [check]);

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
      <AddFolder />
      <div class="flex flex-col">
        {folders.map((folder) => (
          <Folder name={folder.name} id={folder.id} key={folder.id} />
        ))}
      </div>
    </div>
  );
}

export default Folders;
