import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  try {
    // Note: In edge runtime, we can't use fs. Use base64 or fetch logo from public URL
    // For now, we'll use text-based OG image with gradient
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #0A2334 0%, #0F3146 100%)",
            fontFamily: "Arial, sans-serif",
            position: "relative",
          }}
        >
          {/* Logo placeholder - in production, embed as base64 or use public URL */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            {/* Add your logo here as img src with base64 or public URL */}
            <div
              style={{
                fontSize: 120,
                fontWeight: 900,
                letterSpacing: "-4px",
                color: "#F4E7D2",
              }}
            >
              SPAGHETTI SHARK
            </div>
          </div>

          <div
            style={{
              fontSize: 36,
              fontWeight: 600,
              color: "#E0342C",
              letterSpacing: "4px",
              marginBottom: 40,
            }}
          >
            CARB UP. BITE HARDER.
          </div>

          {/* Accent line */}
          <div
            style={{
              width: "400px",
              height: "4px",
              background: "linear-gradient(90deg, #E0342C 0%, #2FA66A 100%)",
              borderRadius: "2px",
              marginBottom: 30,
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              color: "#F4E7D2",
              opacity: 0.8,
            }}
          >
            No images. Just type and teeth.
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    console.error(e);
    return new Response(`Failed to generate image: ${String(e)}`, {
      status: 500,
    });
  }
}
