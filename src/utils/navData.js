import {
  BookOutlined,
  KeyboardArrowDown,
  BoltOutlined,
  PlayCircleOutlineRounded,
} from "@mui/icons-material";

export const navData = [
  {
    id: 0,
    text: "Home",
  },
  {
    id: 1,
    text: "About Us",
  },
  {
    id: 2,
    text: "Case Studies",
  },
  {
    id: 3,
    text: "Resources",
    icon: <KeyboardArrowDown />,
    submenus: [
      {
        icon: <BookOutlined />,
        heading: "Blog",
        text: "The latest industry news, updates and info.",
      },
      {
        icon: <BoltOutlined />,
        heading: "Customer stories",
        text: "Learn how our customers are making big changes..",
      },
      {
        icon: <PlayCircleOutlineRounded />,
        heading: "Video tutorials",
        text: "Get up and running on new features and techniques.",
      },
    ],
  },
];
