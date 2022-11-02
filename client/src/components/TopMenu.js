  import { useState } from 'react'

function TopMenu() {

  const [modalState, setModalState] = useState(false)

  return (
    <div class="bg-green-400 h-auto">
      <div>
        <button onClick={setModalState(true)}>Add Items</button>
      </div>
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <h1>Search</h1>
      </div>
    </div>
  );
}

export default TopMenu;
