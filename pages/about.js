export default function Page({ locale }) {
  return <div>About in : {locale}</div>;
}

export async function getStaticProps({ locale }) {
  return { props: { locale } };
}
