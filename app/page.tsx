import Slogan from "@/components/Slogan";
import BusinessSummary from "@/components/BusinessSummary";
import { Partners } from "@/components/Partners";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-[1320px] px-4 py-8 space-y-8">
      <Slogan />
      <BusinessSummary />
      <Partners />
    </main>
  );
}
