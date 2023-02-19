import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

type PageLayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <div>
        <div className="min-h-screen flex flex-col justify-between mx-4 mb-16">
          <Navbar />
          <main className="flex flex-grow">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
