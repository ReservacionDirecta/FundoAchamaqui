import prisma from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";

import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { slug }
  });
  if (!post) return {};
  return {
    title: `${post.title} | Blog Fundo Achamaqui`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} - Blog Fundo Achamaqui`,
      description: post.excerpt,
      images: [post.mainImage],
    }
  };
}

export const dynamic = 'force-dynamic';

export default async function BlogPostDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const post = await prisma.blogPost.findUnique({
    where: { slug },
  });

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Banner with Background Image */}
        <section 
          className="banner-home-1" 
          style={{ 
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${post.mainImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "450px",
            display: "flex",
            alignItems: "center"
          }}
        >
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="div-block-20" style={{ maxWidth: "800px" }}>
              <div 
                style={{ 
                  color: "#8c7355", 
                  textTransform: "uppercase", 
                  fontWeight: "bold", 
                  fontSize: "14px", 
                  letterSpacing: "2px",
                  marginBottom: "15px"
                }}
              >
                {new Date(post.publishedAt).toLocaleDateString()}
              </div>
              <h1 className="banner-heading-home-1" style={{ fontSize: "48px", lineHeight: "1.2", marginBottom: "20px" }}>
                {post.title}
              </h1>
              <p className="white-paragraph banner-paragraph" style={{ fontSize: "18px", opacity: "0.9" }}>
                {post.excerpt}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section light-background" style={{ padding: "80px 0" }}>
          <div className="w-layout-blockcontainer base-container w-container" style={{ maxWidth: "800px" }}>
            <div 
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                color: "#333333",
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div style={{ marginTop: "60px", paddingTop: "30px", borderTop: "1px solid #dddddd" }}>
              <Link href="/blog" className="primary-button">
                ← Volver al Blog
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
