import Head from "next/head";

function Page({ children, title, description }) {
  return (
    <>
      <Head>
        <title> {title} </title>
        <meta name="description" content={description} />
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
      <div className="flex items-center min-h-screen justify-center">
        <div className = "mt-6 max-w-md space-y-8 text-center font-medium text-5xl">
          Find My&nbsp;<span className="text-red-500">Resume</span>
        </div>
      </div>
    </Page>
  );
}
