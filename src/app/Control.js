"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useCallback } from "react";

export const Control = () => {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  const onClickDelet = useCallback(async () => {
    await fetch(`http://localhost:9999/topics/${id}`, {
      method: "DELETE",
    });
    router.push("/");
    router.refresh();
  }, []);

  return (
    <>
      <ul>
        <li>
          <Link href="/create">create</Link>
        </li>
        {id && (
          <>
            <li>
              <Link href={`/update/${id}`}>update</Link>
            </li>

            <li>
              <button onClick={onClickDelet}>delete</button>
            </li>
          </>
        )}
      </ul>
    </>
  );
};
