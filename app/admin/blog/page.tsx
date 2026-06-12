"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBlogPosts, createBlogPost, updateBlogPost, deleteBlogPost } from "@/app/actions/blog";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  mainImage: string;
  publishedAt: Date | string;
}

export default function BlogCMSPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Form fields
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    const data = await getBlogPosts();
    // Convert Dates to strings if needed
    setPosts(data as any);
    setLoading(false);
  };

  const handleOpenCreate = () => {
    setEditingPost(null);
    setTitle("");
    setSlug("");
    setExcerpt("");
    setContent("");
    setMainImage("");
    setError("");
    setSuccess("");
    setIsFormOpen(true);
  };

  const handleOpenEdit = (post: BlogPost) => {
    setEditingPost(post);
    setTitle(post.title);
    setSlug(post.slug);
    setExcerpt(post.excerpt);
    setContent(post.content);
    setMainImage(post.mainImage);
    setError("");
    setSuccess("");
    setIsFormOpen(true);
  };

  const handleSlugify = (val: string) => {
    setTitle(val);
    if (!editingPost) {
      setSlug(
        val
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "")
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const data = { title, slug, excerpt, content, mainImage };

    if (editingPost) {
      const res = await updateBlogPost(editingPost.id, data);
      if (res.success) {
        setSuccess("¡Entrada actualizada con éxito!");
        setIsFormOpen(false);
        fetchPosts();
      } else {
        setError(res.error || "Error al actualizar entrada");
      }
    } else {
      const res = await createBlogPost(data);
      if (res.success) {
        setSuccess("¡Entrada creada con éxito!");
        setIsFormOpen(false);
        fetchPosts();
      } else {
        setError(res.error || "Error al crear entrada");
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("¿Estás seguro de eliminar esta entrada?")) {
      const res = await deleteBlogPost(id);
      if (res.success) {
        fetchPosts();
      } else {
        alert(res.error || "Error al eliminar");
      }
    }
  };

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#fcf8f4", minHeight: "80vh", padding: "60px 0" }}>
        <div className="w-layout-blockcontainer base-container w-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
            <div>
              <h6 style={{ color: "#8c7355", textTransform: "uppercase", letterSpacing: "2px", fontWeight: "bold" }}>CMS Panel</h6>
              <h2 style={{ fontFamily: "var(--font-gilda, serif)", fontSize: "36px", color: "#2f4137" }}>Administración de Blog</h2>
            </div>
            <button 
              onClick={handleOpenCreate}
              className="primary-button"
              style={{ padding: "12px 24px", cursor: "pointer", border: "none" }}
            >
              + Nueva Entrada
            </button>
          </div>

          {isFormOpen && (
            <div 
              style={{ 
                backgroundColor: "#fff", 
                borderRadius: "12px", 
                padding: "30px", 
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)", 
                marginBottom: "40px",
                border: "1px solid rgba(140, 115, 85, 0.15)"
              }}
            >
              <h3 style={{ marginBottom: "20px", color: "#2f4137" }}>
                {editingPost ? "Editar Entrada" : "Nueva Entrada"}
              </h3>
              
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  <div>
                    <label style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: "bold", color: "#555" }}>Título</label>
                    <input 
                      type="text" 
                      value={title} 
                      onChange={(e) => handleSlugify(e.target.value)} 
                      required
                      style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ddd" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: "bold", color: "#555" }}>Slug (URL)</label>
                    <input 
                      type="text" 
                      value={slug} 
                      onChange={(e) => setSlug(e.target.value)} 
                      required
                      style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ddd" }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: "bold", color: "#555" }}>URL de la Imagen Principal</label>
                  <input 
                    type="text" 
                    value={mainImage} 
                    onChange={(e) => setMainImage(e.target.value)} 
                    placeholder="/images/Kuelap.jpg o link externo"
                    style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ddd" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: "bold", color: "#555" }}>Resumen / Excerpt</label>
                  <textarea 
                    value={excerpt} 
                    onChange={(e) => setExcerpt(e.target.value)} 
                    required
                    rows={2}
                    style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ddd", fontFamily: "inherit" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: "bold", color: "#555" }}>Contenido (HTML permitido)</label>
                  <textarea 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    required
                    rows={8}
                    style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ddd", fontFamily: "inherit" }}
                  />
                </div>

                {error && <div style={{ color: "#c5221f", fontSize: "14px" }}>{error}</div>}
                {success && <div style={{ color: "#137333", fontSize: "14px" }}>{success}</div>}

                <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
                  <button 
                    type="button" 
                    onClick={() => setIsFormOpen(false)}
                    style={{ padding: "10px 20px", borderRadius: "6px", border: "1px solid #ddd", background: "none", cursor: "pointer" }}
                  >
                    Cancelar
                  </button>
                  <button 
                    type="submit" 
                    className="primary-button"
                    style={{ padding: "10px 24px", border: "none", cursor: "pointer" }}
                  >
                    Guardar Entrada
                  </button>
                </div>
              </form>
            </div>
          )}

          {loading ? (
            <div style={{ textAlign: "center", padding: "40px" }}>Cargando entradas...</div>
          ) : posts.length > 0 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {posts.map((post) => (
                <div 
                  key={post.id} 
                  style={{ 
                    backgroundColor: "#fff", 
                    borderRadius: "10px", 
                    padding: "20px", 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                    border: "1px solid rgba(0,0,0,0.03)"
                  }}
                >
                  <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                    <img 
                      src={post.mainImage} 
                      alt="" 
                      style={{ width: "80px", height: "60px", objectFit: "cover", borderRadius: "6px" }} 
                    />
                    <div>
                      <h4 style={{ color: "#2f4137", marginBottom: "4px" }}>{post.title}</h4>
                      <p style={{ color: "#777", fontSize: "13px" }}>
                        /{post.slug} • {new Date(post.publishedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <div style={{ display: "flex", gap: "10px" }}>
                    <button 
                      onClick={() => handleOpenEdit(post)}
                      style={{ padding: "8px 16px", borderRadius: "6px", border: "1px solid #8c7355", color: "#8c7355", background: "none", cursor: "pointer" }}
                    >
                      Editar
                    </button>
                    <button 
                      onClick={() => handleDelete(post.id)}
                      style={{ padding: "8px 16px", borderRadius: "6px", border: "none", background: "#fce8e6", color: "#c5221f", cursor: "pointer" }}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "40px", backgroundColor: "#fff", borderRadius: "10px" }}>
              No hay entradas de blog creadas. ¡Crea tu primera entrada!
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
