import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BeFret - Logistique Internationale",
  description: "Services de logistique internationale vers la RD Congo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}