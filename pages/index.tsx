import Head from "next/head";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { fetchPersons } from "@/hooks/usePersons";
import { Persons } from "@/components/persons";

export default function Home() {
  return (
    <>
      <Head>
        <title>App with mock api</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Persons />
    </>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["persons"],
    queryFn: () => fetchPersons(),
  });

  // Prefetch the query on the server, dehydrate the cache and rehydrate it on the client
  // https://tanstack.com/query/v4/docs/react/guides/ssr#using-nextjs
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
