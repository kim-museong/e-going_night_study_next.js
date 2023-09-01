"use client";
import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    // console.log(title, body);

    const response = await fetch("http://localhost:9999/topics", {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const topic = await response.json();
    const lastId = topic.id;
    const url = `/read/${lastId}`;

    router.push(url);
    router.refresh();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h2>Create</h2>
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body" />
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  );
}
