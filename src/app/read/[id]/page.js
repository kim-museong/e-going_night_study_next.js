export default async function Read({ params }) {
  const readId = params.id;
  const response = await fetch(`http://localhost:9999/topics/${readId}`, {
    cache: "no-store",
  });
  const data = await response.json();

  return (
    <>
      <h2>{data.title}</h2>
      {data.body}
    </>
  );
}
