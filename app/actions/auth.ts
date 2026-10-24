"use server";

import { redirect } from "next/navigation";
import { createHash, timingSafeEqual } from "node:crypto";
import { createAdminSession, destroyAdminSession } from "@/lib/session";

export type LoginState = { error?: string } | undefined;

function safeEqual(a: string, b: string): boolean {
  const hashA = createHash("sha256").update(a, "utf8").digest();
  const hashB = createHash("sha256").update(b, "utf8").digest();
  return timingSafeEqual(hashA, hashB);
}

function safeRedirectTarget(next: string): string {
  return next.startsWith("/") && !next.startsWith("//") ? next : "/admin";
}

export async function login(_state: LoginState, formData: FormData): Promise<LoginState> {
  const username = String(formData.get("username") ?? "");
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/admin");

  const expectedUser = process.env.ADMIN_USER ?? "";
  const expectedPass = process.env.ADMIN_PASSWORD ?? "";

  const credentialsOk =
    expectedUser.length > 0 &&
    expectedPass.length > 0 &&
    safeEqual(username, expectedUser) &&
    safeEqual(password, expectedPass);

  if (!credentialsOk) {
    return { error: "Usuario o contraseña incorrectos." };
  }

  if (!(await createAdminSession())) {
    return { error: "Sesión no disponible. Falta configurar SESSION_SECRET." };
  }

  redirect(safeRedirectTarget(next));
}

export async function logout(): Promise<void> {
  await destroyAdminSession();
  redirect("/admin/login");
}
