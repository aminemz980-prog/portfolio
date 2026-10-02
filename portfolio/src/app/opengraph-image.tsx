import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
export const alt = `${profile.name}, ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#EDF1F6", color: "#10233A" }}>
        <div style={{ fontSize: 72, fontWeight: 700 }}>{profile.name}</div>
        <div style={{ fontSize: 36, marginTop: 24, color: "#2D5BE3" }}>{profile.title}</div>
        <div style={{ fontSize: 28, marginTop: 16, color: "#506278" }}>{profile.tagline}</div>
      </div>
    ),
    size,
  );
}
