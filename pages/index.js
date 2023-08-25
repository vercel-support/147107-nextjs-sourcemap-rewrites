export default function Page({ locale }) {
  return <div>Home in : {locale}</div>;
}

export async function getStaticProps({ locale }) {
  return { props: { locale } };
}
