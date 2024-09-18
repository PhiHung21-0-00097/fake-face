export async function generateMetadata({
  params,
}: {
  params: { lng: string };
}) {
  return {
    icons: "/favicon.ico",
  };
}

export default async function RootLayout({ children }: { children: string }) {
  return <>{children}</>;
}
