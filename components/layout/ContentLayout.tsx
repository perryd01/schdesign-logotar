import { motion } from "framer-motion";
import Head from "next/head";

type ContentLayoutProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
  hiddenTitle?: boolean;
};

export default function ContentLayout({
  title,
  description,
  children,
  hiddenTitle,
}: ContentLayoutProps) {
  return (
    <>
      <Head>
        {title && <title>{`${title} | schdesign logótár`}</title>}
        {!title && <title>schdesign logótár</title>}
        <meta name="description" content={description} />
      </Head>

      <motion.div
        className="w-full h-full max-w-screen-xl mx-auto my-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          damping: 20,
        }}
      >
        {title && !hiddenTitle && (
          <h1 className="text-5xl font-bold">{title}</h1>
        )}
        <div className="py-4">{children}</div>
      </motion.div>
    </>
  );
}
