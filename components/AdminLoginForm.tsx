"use client";

import { useActionState } from "react";
import { login } from "@/app/actions/auth";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "6px",
  border: "1px solid #dcdad6",
  fontSize: "15px",
  outline: "none",
  backgroundColor: "#fff",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "6px",
  fontSize: "14px",
  fontWeight: "bold",
  color: "#555",
};

export default function AdminLoginForm({ next }: { next: string }) {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <form action={action} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
      <input type="hidden" name="next" value={next} />
      <div>
        <label htmlFor="username" style={labelStyle}>Usuario</label>
        <input
          id="username"
          name="username"
          type="text"
          autoComplete="username"
          required
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="password" style={labelStyle}>Contraseña</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          style={inputStyle}
        />
      </div>
      {state?.error && (
        <p role="alert" style={{ margin: 0, fontSize: "14px", color: "#c62828", fontWeight: "600" }}>
          {state.error}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="primary-button"
        style={{ border: "none", cursor: pending ? "wait" : "pointer", width: "100%" }}
      >
        {pending ? "Ingresando..." : "Ingresar"}
      </button>
    </form>
  );
}
