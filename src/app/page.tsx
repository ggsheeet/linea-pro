import { HeroMain } from "@/components/hero";
import { BannerWelcome } from "@/components/banner/bannerWelcome";
import { BannerIntro } from "@/components/banner/bannerIntro";
import { BannerSale } from "@/components/banner/bannerSale";

export default function Home() {
  return (
    <main>
      <HeroMain />
      <BannerWelcome />
      <BannerIntro />
      <BannerSale />
    </main>
  );
}
