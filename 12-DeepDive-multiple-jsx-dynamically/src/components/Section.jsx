export default function Section ({ title, children,  idProps }) {
  return (
    <section id={idProps}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}