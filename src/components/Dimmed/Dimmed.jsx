const Dimmed = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-dimmed-opacity"
    />
  );
};

export default Dimmed;
