import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Details - Nick Lamp",
  description: "Detailed information about my projects and build process",
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
