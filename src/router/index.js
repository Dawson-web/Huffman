import { createHashRouter } from "react-router-dom";

import Huffman from "../pages/Huffman";

const router = createHashRouter([
  {
    path: "/",
    element: <Huffman />,
  },
]);

export default router;
