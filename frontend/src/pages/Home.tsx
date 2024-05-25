import Navbar from "@/components/Navbar/Navbar";
import HomePage from "@/components/home-page.tsx";

export default function Home() {
  return (
    <div className={"bg-white dark:bg-black"}>
      <Navbar />
      <HomePage />
    </div>
  );
}
