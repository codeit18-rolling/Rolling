const Dimmed = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 black-opacity-5"
    />
  );
};

export default Dimmed;
