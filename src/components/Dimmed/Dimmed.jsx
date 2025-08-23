const Dimmed = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-black-opacity-5"
    />
  );
};

export default Dimmed;
