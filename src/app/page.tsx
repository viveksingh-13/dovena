import { AIWorkforce } from "@/components/marketing/AIWorkforce"
import { AutomationExamples } from "@/components/marketing/AutomationExamples"
import { FinalCTA } from "@/components/marketing/FinalCTA"
import { Footer } from "@/components/marketing/Footer"
import { Hero } from "@/components/marketing/Hero"
import { HowItWorks } from "@/components/marketing/HowItWorks"
import { IntegrationStrip } from "@/components/marketing/IntegrationStrip"
import { Integrations } from "@/components/marketing/Integrations"
import { Metrics } from "@/components/marketing/Metrics"
import { Navbar } from "@/components/marketing/Navbar"
import { WhyDovena } from "@/components/marketing/WhyDovena"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <IntegrationStrip />
        <HowItWorks />
        <AutomationExamples />
        <AIWorkforce />
        <Integrations />
        <WhyDovena />
        <Metrics />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
