interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="mobile-nav">
      <button onClick={onClose}>✕</button>

      <a href="#about" onClick={onClose}>
        About
      </a>

      <a href="#programs" onClick={onClose}>
        Programs
      </a>

      <a href="#why-us" onClick={onClose}>
        Why Us
      </a>

      <a href="#contact" onClick={onClose}>
        Contact
      </a>
    </div>
  );
}