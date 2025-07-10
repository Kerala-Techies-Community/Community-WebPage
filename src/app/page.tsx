import BannerComponent from "@/components/Home/BannerComponent";
import HighlightSection from "@/components/Home/HighlightSection";
import IndroductionToCommunity from "@/components/Home/IndroductionToCommunity";


export default function Home() {
  return (
    <>
      <IndroductionToCommunity />
      <BannerComponent />
      <HighlightSection />
    </>
  )
}