export default function Container({ children, el = "div" }) {
  const classNames = "container mx-auto px-4";
  return (
    <>
      {el === "div" ? (
        <div className={classNames}>{children}</div>
      ) : el === "section" ? (
        <section className={classNames}>{children}</section>
      ) : (
        <main className={classNames}>{children}</main>
      )}
    </>
  );
}
