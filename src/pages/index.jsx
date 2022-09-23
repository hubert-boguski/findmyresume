import Head from "next/head";

function Page({ children, title, description }) {
  return (
    <>
      <Head>
        <title> {title} </title>
        <meta name = "description" content = {description}/>
      </Head>
      <div>{children}</div>
    </>
  );
}

export default function Homepage() {
  return (
    <Page
      {...{
        title: "Find My Resume Website",
        description: "Intereactive UX Portfolio Website Hubert Boguski",
      }}
    >
      <div className = "container mx-auto font-medium">
      Find My <span className = "text-red-500 font-medium"> Resume </span>
      </div>
    </Page>
  );
}
