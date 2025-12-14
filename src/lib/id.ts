import crypto from "crypto";

const secret = process.env.ID_SECRET ?? "dev-secret";

export function encodeId(id: string) {
  const h = crypto.createHmac("sha256", secret).update(id).digest("base64url");
  return `${id}.${h}`;
}

export function verifyId(encoded: string) {
  const [id, h] = encoded.split(".");
  if (!id || !h) return null;
  const expected = crypto.createHmac("sha256", secret).update(id).digest("base64url");
  return crypto.timingSafeEqual(Buffer.from(h), Buffer.from(expected)) ? id : null;
}
