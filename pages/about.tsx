import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../src/Link";
import Footer from "../src/Footer";
import Section from "../src/Section";
import useSWR from "swr";
import { useUser } from "../src/lib/auth/useUser";

const fetcher = (url: any, token: any) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
  }).then((res) => res.json());

export default function About() {
  const { user, logout }: any = useUser();
  const { data, error } = useSWR(
    user ? ["/api/getFood", (user as any).token] : null,
    fetcher
  );
  if (!user) {
    // return (
    //   <>
    //     <p>Hi there!</p>
    //     <p>
    //       You are not signed in.{' '}
    //       <Link href={'/auth'}>
    //         Sign in
    //       </Link>
    //     </p>
    //   </>
    // )
  }

  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js with TypeScript example
          </Typography>
          <Link href="/">Go to the main page</Link>
        </Box>
      </Container>

      <Section>
        <div>
          <div>
            <p>You're signed in. Email: {user?.email}</p>
            <p
              style={{
                display: "inline-block",
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => logout()}
            >
              Log out
            </p>
          </div>
          <div>
            <Link href={"/example"}>Another example page</Link>
          </div>
          {error && <div>Failed to fetch food!</div>}
          {data && !error ? (
            <div>Your favorite food is {data.food}.</div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </Section>
      <Section>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
      </Section>

      <Footer />
    </React.Fragment>
  );
}
