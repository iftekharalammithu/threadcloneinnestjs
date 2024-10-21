import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/router"; // Import useRouter

export default function Home() {
  return (
    <div>
      <h1 className="head-text text-left">Home</h1>
      <UserButton afterSignOutUrl="/" /> {/* Use redirectTo for redirection */}
    </div>
  );
}
