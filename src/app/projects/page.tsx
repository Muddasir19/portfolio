import { Spotlight } from "@/components/ui/Spotlight";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white ">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="red"
        />
      <div className="h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 min-h-[100vh]">
        <h1> Projects Page</h1>
      </div>
    </main>
  );
}
