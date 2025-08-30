import { createRoot } from "react-dom/client";
import ImageUploadPreview from "./ImageUploadPreview";

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<ImageUploadPreview />);