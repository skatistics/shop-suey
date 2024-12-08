export function openModal(id) {
  const modal = document.getElementById(id);
  const disabledBG = modal.classList.contains("disabled-bg-modal");
  if (disabledBG) {
    document.body.style.overflow = "hidden";
  }
  modal.classList.remove("hidden");
}

export function hideModal(id) {
  const modal = document.getElementById(id);
  const disabledBG = modal.classList.contains("disabled-bg-modal");
  if (disabledBG) {
    document.body.style.overflow = "unset";
  }
  modal.classList.add("hidden");
}

export function Modal({ children, id, className }) {
  return (
    <div
      id={id}
      className={"hidden fixed" + (className ? " " + className : "")}
    >
      {children}
    </div>
  );
}

export function DisabledBGModal({ children, id, className }) {
  return (
    <div
      id={id}
      className="disabled-bg-modal hidden fixed top-0 left-0 w-full h-full bg-gray-900/70 overflow-hidden"
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
