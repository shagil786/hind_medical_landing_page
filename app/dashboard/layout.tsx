import NavLayout from "@/common/Navbar/NavLayout";
import { TableProvider } from "@/provider/TableProvider";
import { ProductProvider } from "@/provider/ProductProvider";
import Footer from "@/common/Footer/Footer";
import Provider from "@/provider/Provider";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <ProductProvider>
        <TableProvider>
          <NavLayout />
          <main className="flex h-full overflow-auto flex-col items-center p-4 py-10 md:p-10 text-black bg-white dark:text-white dark:bg-black">
            {children}
            <Footer />
          </main>
        </TableProvider>
      </ProductProvider>
    </Provider>
  );
}
