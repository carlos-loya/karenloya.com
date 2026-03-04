import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllCategories } from '@/sanity/lib/fetchers';

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getAllCategories();

  return (
    <>
      <Header categories={categories} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
