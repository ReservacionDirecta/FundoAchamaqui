"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface CmsSetting {
  id: string;
  key: string;
  value: string;
  description: string;
}

export default function AdminDashboard() {
  const [settings, setSettings] = useState<CmsSetting[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingKey, setUpdatingKey] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ [key: string]: { type: "success" | "error"; text: string } }>({});
  const [activeTab, setActiveTab] = useState<"content" | "navigation">("content");

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/cms");
      const data = await res.json();
      if (data.success) {
        setSettings(data.settings);
      }
    } catch (err) {
      console.error("Error fetching settings:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (key: string, value: string) => {
    setUpdatingKey(key);
    // Clear feedback for this key
    setFeedback((prev) => ({ ...prev, [key]: null as any }));

    try {
      const res = await fetch("/api/cms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key, value }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFeedback((prev) => ({
          ...prev,
          [key]: { type: "success", text: "¡Actualizado con éxito!" },
        }));
        // Update local state
        setSettings((prev) =>
          prev.map((s) => (s.key === key ? { ...s, value } : s))
        );
      } else {
        throw new Error(data.error || "Error al actualizar");
      }
    } catch (err: any) {
      setFeedback((prev) => ({
        ...prev,
        [key]: { type: "error", text: err.message || "Error al actualizar" },
      }));
    } finally {
      setUpdatingKey(null);
    }
  };

  const handleChangeValue = (key: string, newValue: string) => {
    setSettings((prev) =>
      prev.map((s) => (s.key === key ? { ...s, value: newValue } : s))
    );
  };

  // Group settings for easy administration
  const textSettings = settings.filter(
    (s) =>
      s.key.startsWith("es_") ||
      s.key.startsWith("en_")
  );

  const mediaSettings = settings.filter(
    (s) =>
      s.key.includes("image") ||
      s.key.includes("video") ||
      s.key.includes("gallery")
  );

  const linkSettings = settings.filter(
    (s) =>
      !textSettings.includes(s) &&
      !mediaSettings.includes(s)
  );

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "#fcf8f4", minHeight: "80vh", padding: "60px 0" }}>
        <div className="w-layout-blockcontainer base-container w-container">
          
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <h6 style={{ color: "#8c7355", textTransform: "uppercase", letterSpacing: "2px", fontWeight: "bold", margin: 0 }}>Panel CMS</h6>
              <h2 style={{ fontFamily: "var(--font-gilda, serif)", fontSize: "36px", color: "#2f4137", margin: "5px 0 0 0" }}>Administración General</h2>
            </div>
            
            {/* Quick Links */}
            <div style={{ display: "flex", gap: "10px" }}>
              <Link href="/admin/blog" style={{
                padding: "10px 20px",
                backgroundColor: "#2f4137",
                color: "#ffffff",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
                transition: "opacity 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
              >
                📝 Administrar Blog
              </Link>
            </div>
          </div>

          {/* Navigation tabs */}
          <div style={{ display: "flex", borderBottom: "2px solid rgba(140, 115, 85, 0.15)", marginBottom: "30px" }}>
            <button
              onClick={() => setActiveTab("content")}
              style={{
                padding: "12px 24px",
                background: "none",
                border: "none",
                borderBottom: activeTab === "content" ? "3px solid #8c7355" : "none",
                color: activeTab === "content" ? "#8c7355" : "#777777",
                fontWeight: "600",
                fontSize: "15px",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              Textos e Idiomas
            </button>
            <button
              onClick={() => setActiveTab("navigation")}
              style={{
                padding: "12px 24px",
                background: "none",
                border: "none",
                borderBottom: activeTab === "navigation" ? "3px solid #8c7355" : "none",
                color: activeTab === "navigation" ? "#8c7355" : "#777777",
                fontWeight: "600",
                fontSize: "15px",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
            >
              Multimedia, Enlaces y Redes
            </button>
          </div>

          {loading ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <p style={{ color: "#8c7355", fontSize: "16px", fontWeight: "600" }}>Cargando configuración del CMS...</p>
            </div>
          ) : (
            <div>
              {/* Tab 1: Text & Language Content */}
              {activeTab === "content" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                  
                  {/* Spanish Content */}
                  <div>
                    <h3 style={{ color: "#2f4137", fontFamily: "var(--font-gilda, serif)", borderBottom: "1px solid rgba(47, 65, 55, 0.1)", paddingBottom: "10px", marginBottom: "20px" }}>
                      Contenido en Español (ES)
                    </h3>
                    <div style={{ display: "grid", gap: "20px" }}>
                      {textSettings.filter(s => s.key.startsWith("es_")).map((setting) => (
                        <SettingCard
                          key={setting.key}
                          setting={setting}
                          onChange={handleChangeValue}
                          onUpdate={handleUpdate}
                          isUpdating={updatingKey === setting.key}
                          feedback={feedback[setting.key]}
                        />
                      ))}
                    </div>
                  </div>

                  {/* English Content */}
                  <div>
                    <h3 style={{ color: "#2f4137", fontFamily: "var(--font-gilda, serif)", borderBottom: "1px solid rgba(47, 65, 55, 0.1)", paddingBottom: "10px", marginBottom: "20px" }}>
                      Contenido en Inglés (EN)
                    </h3>
                    <div style={{ display: "grid", gap: "20px" }}>
                      {textSettings.filter(s => s.key.startsWith("en_")).map((setting) => (
                        <SettingCard
                          key={setting.key}
                          setting={setting}
                          onChange={handleChangeValue}
                          onUpdate={handleUpdate}
                          isUpdating={updatingKey === setting.key}
                          feedback={feedback[setting.key]}
                        />
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* Tab 2: Media, Links & Config */}
              {activeTab === "navigation" && (
                <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                  
                  {/* Media Content */}
                  <div>
                    <h3 style={{ color: "#2f4137", fontFamily: "var(--font-gilda, serif)", borderBottom: "1px solid rgba(47, 65, 55, 0.1)", paddingBottom: "10px", marginBottom: "20px" }}>
                      Multimedia (Imágenes, Galería y Videos)
                    </h3>
                    <div style={{ display: "grid", gap: "20px" }}>
                      {mediaSettings.map((setting) => (
                        <SettingCard
                          key={setting.key}
                          setting={setting}
                          onChange={handleChangeValue}
                          onUpdate={handleUpdate}
                          isUpdating={updatingKey === setting.key}
                          feedback={feedback[setting.key]}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Links and general contact info */}
                  <div>
                    <h3 style={{ color: "#2f4137", fontFamily: "var(--font-gilda, serif)", borderBottom: "1px solid rgba(47, 65, 55, 0.1)", paddingBottom: "10px", marginBottom: "20px" }}>
                      Enlaces, Datos de Contacto y Redes Sociales
                    </h3>
                    <div style={{ display: "grid", gap: "20px" }}>
                      {linkSettings.map((setting) => (
                        <SettingCard
                          key={setting.key}
                          setting={setting}
                          onChange={handleChangeValue}
                          onUpdate={handleUpdate}
                          isUpdating={updatingKey === setting.key}
                          feedback={feedback[setting.key]}
                        />
                      ))}
                    </div>
                  </div>

                </div>
              )}
            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}

interface SettingCardProps {
  setting: CmsSetting;
  onChange: (key: string, value: string) => void;
  onUpdate: (key: string, value: string) => void;
  isUpdating: boolean;
  feedback?: { type: "success" | "error"; text: string };
}

function SettingCard({ setting, onChange, onUpdate, isUpdating, feedback }: SettingCardProps) {
  const isLongText = setting.value.length > 80;

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        padding: "20px",
        border: "1px solid rgba(140, 115, 85, 0.12)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.01)",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px" }}>
        <div>
          <span
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "#8c7355",
            }}
          >
            {setting.key}
          </span>
          <p style={{ margin: "2px 0 0 0", fontSize: "13px", color: "#666666" }}>{setting.description}</p>
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px", alignItems: "flex-end", flexWrap: "wrap" }}>
        <div style={{ flex: "1", minWidth: "280px" }}>
          {isLongText ? (
            <textarea
              value={setting.value}
              onChange={(e) => onChange(setting.key, e.target.value)}
              rows={4}
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: "6px",
                border: "1px solid #dcdad6",
                fontSize: "14px",
                fontFamily: "inherit",
                resize: "vertical",
                outline: "none",
              }}
            />
          ) : (
            <input
              type="text"
              value={setting.value}
              onChange={(e) => onChange(setting.key, e.target.value)}
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: "6px",
                border: "1px solid #dcdad6",
                fontSize: "14px",
                outline: "none",
              }}
            />
          )}
        </div>

        <button
          onClick={() => onUpdate(setting.key, setting.value)}
          disabled={isUpdating}
          style={{
            padding: "10px 20px",
            backgroundColor: "#8c7355",
            color: "#ffffff",
            border: "none",
            borderRadius: "6px",
            fontWeight: "600",
            fontSize: "14px",
            cursor: "pointer",
            transition: "background-color 0.2s",
            height: "40px",
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#725b41"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#8c7355"}
        >
          {isUpdating ? "Guardando..." : "Guardar"}
        </button>
      </div>

      {feedback && (
        <span
          style={{
            fontSize: "13px",
            color: feedback.type === "success" ? "#2e7d32" : "#c62828",
            fontWeight: "600",
          }}
        >
          {feedback.text}
        </span>
      )}
    </div>
  );
}
