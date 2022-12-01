export function Button() {
  // eslint-disable-next-line i18n-text/no-en --- disabled for now
  const translateThis = "Click me";

  return (
    <button type="button">
      <div>{translateThis}</div>
    </button>
  );
}
