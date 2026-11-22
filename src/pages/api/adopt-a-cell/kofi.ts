import { env } from "cloudflare:workers";
import type { APIRoute } from "astro";
import { handleKofi } from "@/lib/adopt-a-cell/api";

export const prerender = false;

export const POST: APIRoute = ({ request }) => handleKofi(request, env);
