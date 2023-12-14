import { allDocs } from "contentlayer/generated";
import { ImageResponse } from "next/server";

// Route segment config
export const runtime = "edge";

// Image metadata
// export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  const doc = allDocs.find((d) => d.slug === `/blog/${params.slug}`);
  const SatoshiBold = fetch(
    new URL("../../../fonts/Satoshi-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          // background: "",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "#F2F2F2",
          background: "#121316",
          fontSize: "24px",
          padding: "50px",
        }}
      >
        <>
          {doc?.tags!!.map((t, idx) => (
            <span
              style={{
                fontSize: "16px",
                display: "flex",
                fontWeight: "lighter",
                marginRight: "20px",
                color: "#CBEE4C",
              }}
              key={idx}
            >
              {t}
            </span>
          ))}
        </>
        <h1 style={{ display: "block", padding: 0, margin: "10px 0px" }}>
          {doc?.title}
        </h1>
        <p
          style={{
            color: "#adadad",
            fontSize: "22px",
            width: "80%",
          }}
        >
          {doc?.description}
        </p>
        <>
          <p style={{ color: "#F3F3F3", fontWeight: "300", marginTop: "50px" }}>
            Read more on
            <span style={{ marginLeft: "10px", color: "#CBEE4C" }}>
              yacouri.com
            </span>
          </p>
        </>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Satoshi",
          data: await SatoshiBold,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
