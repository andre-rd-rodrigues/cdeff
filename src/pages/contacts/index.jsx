import React from "react";

const Contacts = () => {
  return <div>Contacts</div>;
};

export default Contacts;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}
