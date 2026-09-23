import { profile } from "./profile";
import { research } from "./research";
export const timeline = [
  {
    label: "Education",
    title: "Biology undergraduate",
    detail: profile.university,
  },
  {
    label: "Research",
    title: "Research projects and etc.",
    detail: research.map((entry) => entry.title).join("; ") + ".",
  },
  {
    label: "Long-term direction",
    title: "Aspiring physician-scientist",
    detail: profile.goal,
  },
];
