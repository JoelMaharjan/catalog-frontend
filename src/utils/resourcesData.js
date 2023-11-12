import tools from "../assets/images/tools.png"
import docs from "../assets/images/docs.png"
import tick from "../assets/images/Solid.png"
import { ArrowForward } from "@mui/icons-material";

export const resourcesData = [
  {
    id:0,
    image: tools,
    imgText: "Tools",
    title: "Defence Elvis",
    description:
      "It allows creating networks of public spending on goods services used in defense in 28 EU countries...",
    link: "Learn more",
    icon: <ArrowForward style={{ fontSize: 18 }} />,
  },
  {
    id:1,
    image: docs,
    imgText: "Evidence",
    title: "Open Procurement",
    description:
      "It allows creating networks of public spending on goods services used in defense in 28 EU countries...",
    link: "Learn more",
    icon: <ArrowForward style={{ fontSize: 18 }} />,
  },
  {
    id:2,
    image: tick,
    imgText: "Best Practices",
    title: "Transparent Spending",
    description:
      "It allows creating networks of public spending on goods services used in defense in 28 EU countries...",
    link: "Learn more",
    icon: <ArrowForward style={{ fontSize: 18 }} />,
  },
];
