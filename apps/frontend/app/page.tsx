import { Header, TaskComposerBar } from "@/app/components";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans ">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 sm:items-start">
        <Header />
        <TaskComposerBar/>
      </main>
    </div>
  );
}
