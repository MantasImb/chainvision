import { ModeToggle } from "@/components/darkmode-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-black">
      <ModeToggle />
    </main>
  );
}
