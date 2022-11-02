import { useState } from "react";

function AddItemsModal({ show, action }) {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState("");

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

  if (show === false) {
    return null;
  }
  return (
    <div class="fixed flex  left-0 top-0 w-full h-full bg-[#00000099] justify-center items-center">
      <div class="fixed bg-white w-5/12 h-auto top-50 left-50 ">
        <form>
          <label>Name</label>
          <input type="text" />

          <label>Email</label>
          <input type="email" />

          <label>Password</label>
          <input type="password" />

          <label>Folder</label>
          <select name="folders"></select>

          <label>Generate Password</label>
          <input
            type="number"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
          <button onClick={generatePassword}>New Pass</button>
          <input
            type="text"
            value={generatedPassword}
            onChange={(e) => setGeneratedPassword(e.target.value)}
          />

          <button type="submit">Save</button>
        </form>
        <button onClick={action}>Close</button>
      </div>
    </div>
  );
}

export default AddItemsModal;
