import prisma from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Noticias | Hotel Fundo Achamaqui",
  description: "Explora la magia, leyendas y atractivos turísticos de Chachapoyas y la región Amazonas en nuestro blog oficial.",
};

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { publishedAt: "desc" },
  });

  return (
    <>
      <Navbar />
      <main>
        <HeroBanner 
          title="Nuestro Blog" 
          subtitle="Trending Topics"
          paragraph="Historias, aventuras y secretos en el corazón de la Ceja de Selva Peruana."
          className="blog-banner"
        />

        <section className="section light-background">
          <div className="w-layout-blockcontainer base-container w-container">
            {posts.length > 0 ? (
              <div className="collection-list-wrapper-blog-home w-dyn-list">
                <div role="list" className="collection-list-blog-home blog w-dyn-items">
                  {posts.map((post) => (
                    <div key={post.id} className="w-dyn-item">
                      <Link href={`/blog/${post.slug}`} className="blog-home-link w-inline-block">
                        <img src={post.mainImage} loading="lazy" alt={post.title} className="blog-img" />
                      </Link>
                      <div className="info-blog-home">
                        <div className="date-blog">{new Date(post.publishedAt).toLocaleDateString()}</div>
                        <Link href={`/blog/${post.slug}`} className="link-block w-inline-block">
                          <h4 className="blog-name">{post.title}</h4>
                        </Link>
                        <p>{post.excerpt}</p>
                        <div className="div-block-4 div-block-5 link-blog">
                          <Link href={`/blog/${post.slug}`}>Read More</Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="w-dyn-empty">
                <div>No se encontraron artículos en el blog aún.</div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
