import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";

export default function ImageWithSkeleton({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "200px",
      }}
    >
      {!loaded && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          animation="wave"
          sx={{ borderRadius: "16px" }}
        />
      )}

      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "16px",
          display: loaded ? "block" : "none",
        }}
      />
    </div>
  );
}
