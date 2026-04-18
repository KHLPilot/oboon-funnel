import kv from "@/lib/kv";

const TEST_IDS = ["landmark", "home-type", "balance", "escape", "ramen"];

export async function getCounts(): Promise<Record<string, number>> {
  try {
    const values = await kv.mget<number[]>(...TEST_IDS.map((id) => `count_${id}`));
    const result: Record<string, number> = {};
    TEST_IDS.forEach((id, i) => {
      result[id] = values[i] ?? 0;
    });
    return result;
  } catch {
    return {};
  }
}

export async function incrementCount(id: string): Promise<void> {
  if (!TEST_IDS.includes(id)) return;
  try {
    await kv.incr(`count_${id}`);
  } catch {
    // silently ignore
  }
}

export { TEST_IDS };
