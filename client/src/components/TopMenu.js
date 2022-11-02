import AddItemsModal from "../modals/AddItemsModal";

import { useState } from "react";

function TopMenu() {
  const [modalState, setModalState] = useState(false);

  function openModal() {
    setModalState(!modalState);
  }

  return (
    <div class="bg-green-400 h-auto">
      <AddItemsModal show={modalState} action={openModal} />
      <div>
        <button onClick={openModal}>Add Items</button>
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
