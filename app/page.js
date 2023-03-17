import DisplayMetadata from "./display-metadata";

export async function generateMetadata({ searchParams }) {
  const type = typeof searchParams;
  const string = JSON.stringify({ type, searchParams });

  /** @type {import('next').Metadata} */
  const metadata = {
    description: string,
  };

  return metadata;
}

export default function Component(props) {
  return <DisplayMetadata {...props} />;
}
