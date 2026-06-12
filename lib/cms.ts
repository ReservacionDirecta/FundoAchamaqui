import prisma from "@/lib/prisma";
import { defaultCmsSettings } from "@/lib/defaultCmsSettings";

export async function getCmsSettingsKeys(keys: string[]): Promise<Record<string, string>> {
  try {
    // 1. Ensure keys exist in DB
    for (const key of keys) {
      const existing = await prisma.cmsSetting.findUnique({
        where: { key },
      });
      
      if (!existing) {
        const defaultItem = defaultCmsSettings.find((item) => item.key === key);
        if (defaultItem) {
          try {
            console.log(`Auto-creating missing CMS setting: ${key}`);
            await prisma.cmsSetting.create({
              data: {
                key: defaultItem.key,
                value: defaultItem.value,
                description: defaultItem.description,
              },
            });
          } catch (e) {
            // Ignore unique constraint error from concurrent workers
          }
        }
      }
    }

    // 2. Fetch all requested keys
    const settings = await prisma.cmsSetting.findMany({
      where: {
        key: {
          in: keys,
        },
      },
    });

    const result: Record<string, string> = {};
    settings.forEach((s) => {
      result[s.key] = s.value;
    });

    return result;
  } catch (error) {
    console.error("Error in getCmsSettingsKeys:", error);
    // Return empty fallback
    return {};
  }
}
