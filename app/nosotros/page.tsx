import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Testimonials from "@/components/Testimonials";
import prisma from "@/lib/prisma";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Hotel Fundo Achamaqui",
  description: "Nuestra historia, misión y compromiso con la conservación y el turismo sostenible en la región de Chachapoyas.",
};

export const dynamic = 'force-dynamic';

export default async function AboutUs() {
  // Fetch latest 3 blog posts
  const latestPosts = await prisma.blogPost.findMany({
    orderBy: { publishedAt: "desc" },
    take: 3,
  });

  const gallerySetting = await prisma.cmsSetting.findUnique({
    where: { key: "about_gallery_images" }
  });

  const galleryUrls = gallerySetting 
    ? gallerySetting.value.split(",").map(url => url.trim())
    : [
        "https://lh3.googleusercontent.com/pw/AP1GczPR-ZSm9PCV9UeazIbjblpsaYgtF7r3PfiGtZnZ2XY-7GYND19_nX8S-K1KqEYcj5hTXKiE8sA6LdQoxsgQESVfxD9QfaxgxbtC7so5jid16pZzHACS",
        "https://lh3.googleusercontent.com/pw/AP1GczME1PCZhf7qNgTbwhliv1Jy4oA5fv8Pmd9Z2xPJJaHYISOFqynNlBlxJ2kqcaxXKb6cwdtyBCnBvhHlZz7ETD9lfTHYy0ibpAPDmQXm2raDqfOZ5JFb",
        "https://lh3.googleusercontent.com/pw/AP1GczORtnD0ksCQBw3GWk7RhYzv3vIOVdrVSK9Mh7C61SK4uZaY2MFGlTHRvWtcAigsPkRv8UfeGxtc-deDGTL91oNC7mn9EZGSI5P4SUF3XYOZFPExRkZE",
        "https://lh3.googleusercontent.com/pw/AP1GczPltOiZhORn4JPH_-WnJBctgty_iuGm-I1focScUsz0TMPb-3E8pEm9XPEOujSr8GU9XwnefPvWEZSQmYexx6y6orjEYWvmVnWnV6T4MtbkX39JvU1d",
        "https://lh3.googleusercontent.com/pw/AP1GczO5mjuLAQZPqB-kPOQXSF6w2JPXyzS-9-eDSYPXjqwbO_S0AeK2PccXgiiEBXQVOOlPn0_wCwER6ZlV4I5AgZk_aeExp3_DNfVl9PJeqeEG61XN2gVL",
        "https://lh3.googleusercontent.com/pw/AP1GczNWFB7o-cQpOiDt3bNmd9lkRp60iQIz39qRIjcNUcrKEXej1UxZA61kaOG3boWsEin0MFGOQF0zr4MSg1CkIcvuQaYL4YQnAGibUzN9e4rdFHYL3J-E"
      ];

  return (
    <>
      <Navbar />
      <main>
        <HeroBanner 
          title="Sobre Nosotros" 
          subtitle="Fundo Achamaqui"
          paragraph="Tu Refugio en el Corazón de Chachapoyas: Historia, Naturaleza y Pasión."
          className="about-us-banner"
        />

        <section className="section">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="title-central">
              <img className="stars-img" src="/images/219-2191012_3-star-vector-transparent-3-stars-png.png" alt="Stars" loading="lazy" />
              <h2><strong>Nuestra Historia</strong></h2>
              <p>Fundo Achamaqui nació de la pasión por la naturaleza y la cultura de Chachapoyas. Nos enorgullece ser parte de esta comunidad y contribuir al desarrollo sostenible de la región.</p>
            </div>
            
            {/* Replaced video with a beautiful hoverable image gallery from the Google Photos Album */}
            <div className="album-gallery" style={{ marginTop: "40px", marginBottom: "40px" }}>
              <div 
                className="w-layout-grid grid" 
                style={{ 
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
                  gap: "24px" 
                }}
              >
                {galleryUrls.map((url, idx) => (
                  <div 
                    key={idx} 
                    className="service-home" 
                    style={{ 
                      opacity: 1, 
                      overflow: "hidden", 
                      borderRadius: "12px", 
                      height: "280px",
                      position: "relative"
                    }}
                  >
                    <img 
                      src={url} 
                      alt={`Fundo Achamaqui ${idx + 1}`} 
                      className="service-img" 
                      style={{ 
                        width: "100%", 
                        height: "100%", 
                        objectFit: "cover"
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <section className="section light-background">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="title-wrap">
              <div className="div-block-8 div-block-9 left-subtitle" style={{ opacity: 1 }}>
                <h6 className="heading-2">Misión<br /></h6>
              </div>
              <div className="right-title">
                <h2 style={{ opacity: 1 }}><strong>Nuestra Misión:</strong><br /></h2>
                <p style={{ opacity: 1 }}>
                  Ofrecer a nuestros huéspedes un refugio de lujo en plena selva, donde la comodidad y la aventura se unen de manera perfecta. Nos esforzamos por proporcionar un servicio excepcional, respetar y preservar el entorno natural y promover la cultura local.<br /><br />
                  <strong>Nuestro Compromiso con la Sostenibilidad:<br />‍</strong>En Fundo Achamaqui, somos conscientes de la importancia de preservar la belleza natural de Chachapoyas. Nos comprometemos a implementar prácticas sostenibles en todas nuestras operaciones y a apoyar iniciativas locales de conservación.<br />
                </p>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        <section className="section">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="title-wrap">
              <div className="div-block-8 div-block-9 left-subtitle" style={{ opacity: 1 }}>
                <h6 className="heading-2">TRENDING TOPICS<br /></h6>
              </div>
              <div className="right-title">
                <h2 style={{ opacity: 1 }}>Hotel Blog</h2>
                <p style={{ opacity: 1 }}>Explorando la Magia de Chachapoyas: Descubre Historias, Aventuras y Secretos en el Corazón de la Ceja de Selva Peruana.<br /></p>
              </div>
            </div>
            {latestPosts.length > 0 ? (
              <div className="collection-list-wrapper-blog-home w-dyn-list">
                <div role="list" className="collection-list-blog-home w-dyn-items">
                  {latestPosts.map((post) => (
                    <div key={post.id} className="w-dyn-item" style={{ opacity: 1 }}>
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
