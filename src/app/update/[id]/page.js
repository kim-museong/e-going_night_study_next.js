"use client";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Create({ params }) {
  const router = useRouter();
  const id = params.id;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    // console.log(title, body);

    const response = await fetch(`http://localhost:9999/topics/${id}`, {
      method: "PATCH",
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

  const refresh = useCallback(async () => {
    const response = await fetch(`http://localhost:9999/topics/${id}`, {
      cache: "no-store",
    });
    const topic = await response.json();

    setTitle(topic.title);
    setBody(topic.body);
  }, [id]);

  const onChnageHandler = useCallback((e) => {
    const name = e.target.name;

    if (name === "title") {
      setTitle(e.target.value);
    } else if (name === "body") {
      setBody(e.target.body);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, []);

  return (
    <form onSubmit={onSubmitHandler}>
      <h2>Update</h2>
      <p>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={onChnageHandler}
        />
      </p>
      <p>
        <textarea
          name="body"
          placeholder="body"
          value={body}
          onChange={onChnageHandler}
        />
      </p>
      <p>
        <input type="submit" value="update" />
      </p>
    </form>
  );
}
