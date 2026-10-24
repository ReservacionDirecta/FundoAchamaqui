import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminLoginForm from "@/components/AdminLoginForm";
import { verifyAdminSession } from "@/lib/session";

export const metadata: Metadata = {
  title: "Acceso administrador | Hotel Fundo Achamaqui",
  description: "Acceso restringido al panel de administración de Fundo Achamaqui.",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  if (await verifyAdminSession()) {
    redirect("/admin");
  }
  const { next } = await searchParams;

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#fcf8f4", minHeight: "80vh", padding: "80px 0" }}>
        <div className="w-layout-blockcontainer base-container w-container">
          <div style={{ maxWidth: "440px", margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-gilda, serif)",
                fontSize: "34px",
                color: "#2f4137",
                margin: "0 0 8px 0",
              }}
            >
              Panel de administración
            </h2>
            <p style={{ color: "#666", fontSize: "15px", margin: "0 0 28px 0" }}>
              Ingresa tus credenciales para gestionar el contenido del sitio.
            </p>
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                padding: "32px",
                border: "1px solid rgba(140, 115, 85, 0.15)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              <AdminLoginForm next={next ?? "/admin"} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
