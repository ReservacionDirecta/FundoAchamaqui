import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { defaultCmsSettings } from "@/lib/defaultCmsSettings";

// Dynamic routing
export const dynamic = "force-dynamic";

async function ensureDefaultSettings() {
  for (const item of defaultCmsSettings) {
    const existing = await prisma.cmsSetting.findUnique({
      where: { key: item.key },
    });
    if (!existing) {
      console.log(`Adding missing default CMS setting key: ${item.key}`);
      await prisma.cmsSetting.create({
        data: {
          key: item.key,
          value: item.value,
          description: item.description,
        },
      });
    }
  }
}

export async function GET(req: NextRequest) {
  try {
    await ensureDefaultSettings();
    const settings = await prisma.cmsSetting.findMany({
      orderBy: { key: "asc" },
    });
    return NextResponse.json({ success: true, settings });
  } catch (error: any) {
    console.error("CMS GET API Error:", error);
    return NextResponse.json(
      { error: error.message || "Error al obtener la configuración del CMS" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { key, value } = await req.json();

    if (!key) {
      return NextResponse.json(
        { error: "La clave (key) es requerida para actualizar." },
        { status: 400 }
      );
    }

    const updated = await prisma.cmsSetting.upsert({
      where: { key },
      update: { value },
      create: { key, value, description: "Custom User setting" },
    });

    return NextResponse.json({ success: true, setting: updated });
  } catch (error: any) {
    console.error("CMS POST API Error:", error);
    return NextResponse.json(
      { error: error.message || "Error al actualizar la configuración del CMS" },
      { status: 500 }
    );
  }
}
