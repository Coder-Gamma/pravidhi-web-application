export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-5 py-2 rounded-lg  text-[#f5f5f5] transition ${className}`}
    >
      {children}
    </button>
  );
}
