import { useState } from "react";
import { useRecoilState } from "recoil";

import { checkState } from "../stores/checkAtom";

function AddFolder() {
  const [open, setOpen] = useState(false);
  const [folder, setFolder] = useState();
  const [check, setCheck] = useRecoilState(checkState);

  if (open === false) {
    return <button onClick={() => setOpen(true)}>+</button>;
  }

  function submitFolder(e) {
    const data = {
      name: folder,
    };

    if (e.key === "Enter") {
      if (folder == "") {
        setOpen(false);
      } else {
        fetch("http://localhost:3100/api/folder/create-folder", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => {
            console.error("Error", error);
          });
        setOpen(false);
        setCheck(check + 1);
      }
    }
  }

  if (open === true) {
    return (
      <input
        type="text"
        name="folder"
        value={folder}
        onChange={(e) => setFolder(e.target.value)}
        onKeyPress={submitFolder}
      />
    );
  }
}

export default AddFolder;
