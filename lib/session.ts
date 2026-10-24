import "server-only";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

export const ADMIN_SESSION_COOKIE = "admin_session";
const SESSION_TTL_MS = 12 * 60 * 60 * 1000;

function getSecretKey(): Uint8Array | null {
  const secret = process.env.SESSION_SECRET;
  if (!secret) return null;
  return new TextEncoder().encode(secret);
}

export async function createAdminSession(): Promise<boolean> {
  const key = getSecretKey();
  if (!key) {
    console.error("SESSION_SECRET is not configured; refusing to create admin session.");
    return false;
  }
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS);
  const token = await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresAt)
    .sign(key);
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });
  return true;
}

export async function verifyAdminSession(): Promise<boolean> {
  const key = getSecretKey();
  if (!key) return false;
  const token = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;
  if (!token) return false;
  try {
    const { payload } = await jwtVerify(token, key, { algorithms: ["HS256"] });
    return payload.role === "admin";
  } catch {
    return false;
  }
}

export async function destroyAdminSession(): Promise<void> {
  (await cookies()).delete(ADMIN_SESSION_COOKIE);
}

export async function requireAdmin(): Promise<void> {
  if (!(await verifyAdminSession())) {
    throw new Error("No autorizado");
  }
}
