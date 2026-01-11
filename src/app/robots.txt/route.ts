import { site } from "@/lib/site";

export function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

  const body = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml

# ${site.name}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
