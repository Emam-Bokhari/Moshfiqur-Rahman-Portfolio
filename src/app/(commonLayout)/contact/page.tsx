import ContactForm from "@/components/modules/Contacts";
import SectionTitle from "@/components/shared/SectionTitle";

export default function ContactPage() {
  return (
    <div className="lg:max-w-screen-2xl p-4 mx-auto ">
      <SectionTitle title="Contact With Me" />
      <ContactForm />
    </div>
  );
}
