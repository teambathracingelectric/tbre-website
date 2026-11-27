import { env } from "cloudflare:workers";
import type { APIRoute } from "astro";
import { handleState } from "@/lib/adopt-a-cell/api";

export const prerender = false;

export const GET: APIRoute = () => handleState(env);
