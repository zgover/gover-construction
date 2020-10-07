import React from "react";
import useSWR from "swr";
import { useUser } from "../src/lib/auth/useUser";
import Link from "../src/Link";

const fetcher = (url: any, token: any) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
  }).then((res) => res.json());

export default function Index() {
  const { user, logout }: any = useUser();
  const { data, error } = useSWR(
    user ? ["/api/getFood", (user as any).token] : null,
    fetcher
  );
  if (!user) {
    return (
      <>
        <p>Hi there!</p>
        <p>
          You are not signed in. <Link href={"/auth"}>Sign in</Link>
        </p>
      </>
    );
  }

  return (
    <div>
      {error && <div>Failed to fetch food!</div>}
      {data && !error ? (
        <div>Your favorite food is {data.food}.</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
