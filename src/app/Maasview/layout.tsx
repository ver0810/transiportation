import "../globals.css";

export default function MaasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main className="overflow-scroll">
        {children}
      </main>
    </div>
  );
}
