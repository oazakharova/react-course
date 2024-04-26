export default function CurrentTime() {
  const now = new Date().toLocaleTimeString();
  return <div>Текущее время: {now}</div>;
}
