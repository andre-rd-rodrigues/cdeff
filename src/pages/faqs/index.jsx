import React from "react";

function FaqsPage() {
  return <div>FaqsPage</div>;
}

export default FaqsPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}
