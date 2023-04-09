import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Halaman Kontak"
        description="Halaman ini berisi informasi tentang kontak kami"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
