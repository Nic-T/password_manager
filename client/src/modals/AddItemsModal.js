import { useState, useEffect } from "react";
import { ReactComponent as RefreshButton } from "../images/refresh.svg";

function AddItemsModal({ show, action }) {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [folders, setFolders] = useState([]);
  const [folder, setFolder] = useState("");

  useEffect(() => {
    getFolders();
  }, []);

  function getFolders() {
    fetch("http://localhost:3100/api/folder/get-folders", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setFolders(data))
      .catch((error) => {
        console.error(error);
      });
  }

  function generatePassword(event) {
    event.preventDefault();

    const data = { length: passwordLength };

    fetch("http://localhost:3100/api/pass/generate-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => setGeneratedPassword(data.password))
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      password: generatedPassword,
      email: email,
      name: name,
      url: url,
      folder: folder,
    };

    fetch("http://localhost:3100/api/pass/create-password", {
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
  }

  if (show === false) {
    return null;
  }
  return (
    <div class="fixed flex  left-0 top-0 w-full h-full bg-[#00000099] justify-center items-center">
      <div class="fixed bg-white w-5/12 h-auto top-50 left-50 rounded-md h-2/3">
        <form class="flex flex-row space-x-8 p-8" onSubmit={handleSubmit}>
          <div class="flex flex-col space-y-8">
            <div class="inline-block p-1.5 border rounded-lg">
              <label class="block text-xs text-gray-500">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="inline-block p-1.5 border rounded-lg">
              <label class="block text-xs text-gray-500">Email</label>
              <input
                class="block leading-5  outline-0 border-0 w-full p-1"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="inline-block p-1.5 border rounded-lg">
              <label class="block text-xs text-gray-500">Password</label>
              <div class="flex">
                <input
                  class="block leading-5  outline-0 border-0 w-full p-1"
                  type="text"
                  value={generatedPassword}
                  onChange={(e) => setGeneratedPassword(e.target.value)}
                />
              </div>
            </div>
            <div class="inline-block p-1.5 border rounded-lg">
              <label class="block text-xs text-gray-500">URL</label>
              <input
                class="block leading-5  outline-0 border-0 w-full p-1"
                type="url"
                name="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />{" "}
            </div>
          </div>

          <div class="flex flex-col space-y-8">
            <div class="inline-block p-1.5 border rounded-lg flex ">
              <button
                class="block rounded-md w-fit h-fit "
                onClick={generatePassword}
              >
                <RefreshButton class="w-fit h-fit" />
              </button>
              <label class="block text-xs text-gray-500">Length</label>

              <input
                class="block leading-5  outline-0 border-0 w-full p-1"
                type="number"
                value={passwordLength}
                onChange={(e) => setPasswordLength(e.target.value)}
              />
            </div>

            <div class="inline-block p-1.5 border rounded-lg">
              <label class="block text-xs text-gray-500">Folder</label>
              <select
                onChange={(e) => setFolder(e.target.value)}
                class="block leading-5  outline-0 border-0 w-full p-1"
                name="folders"
                id="folders-select"
              >
                {folders.map((folder) => (
                  <option
                    key={folder.id}
                    value={folder.id}
                    selectedid={folder.id}
                  >
                    {folder.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit">Save</button>
        </form>
        <button onClick={action}>Close</button>
      </div>
    </div>
  );
}

export default AddItemsModal;
