export function openModal(id) {
  const modal = document.getElementById(id);
  const disabledBG = modal.classList.contains("disabled-bg-modal");
  if (disabledBG) {
    document.body.style.overflow = "hidden";
  }
  modal.style.display = "block";
}

export function hideModal(id) {
  const modal = document.getElementById(id);
  const disabledBG = modal.classList.contains("disabled-bg-modal");
  if (disabledBG) {
    document.body.style.overflow = "unset";
  }
  modal.style.display = "none";
}

export function Modal({ children, id, className }) {
  return (
    <div
      id={id}
      className={
        "hidden fixed max-w-full max-h-full w-auto h-auto z-20" +
        (className ? " " + className : "")
      }
    >
      {children}
    </div>
  );
}

export function DisabledBGModal({ children, id, className }) {
  return (
    <div
      id={id}
      className="disabled-bg-modal hidden fixed top-0 left-0 w-full h-full bg-gray-500/70 z-20 overflow-hidden"
    >
      <div
        className={
          "absolute max-w-full max-h-full w-auto h-auto" +
          (className ? " " + className : "")
        }
      >
        {children}
      </div>
    </div>
  );
}
