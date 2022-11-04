import { useState } from "react";

function AddItemsModal({ show, action }) {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(""); 
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [url,setUrl] = useState("")

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
        
    const data = {password: generatedPassword, email:email, name:name, url:url}
    
    fetch("http://localhost:3100/api/pass/create-password", {
      method:"POST",
      credentials:'include',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {console.error("Error", error)})

  }

  if (show === false) {
    return null;
  }
  return (
    <div class="fixed flex  left-0 top-0 w-full h-full bg-[#00000099] justify-center items-center">
      <div class="fixed bg-white w-5/12 h-auto top-50 left-50 ">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

          <label>Length</label>
          <input
            type="number"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
          <button onClick={generatePassword}>Generate Pass</button>
          <input
            type="text"
            value={generatedPassword}
            onChange={(e) => setGeneratedPassword(e.target.value)}
          />

          
          <label>Folder</label>
          <select name="folders"></select>

          <label>URL</label>
          <input
            type="url"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}/>

          <button type="submit">Save</button>
        </form>
        <button onClick={action}>Close</button>
      </div>
    </div>
  );
}

export default AddItemsModal;
