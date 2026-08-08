import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyAINow } from './components/WhyAINow';
import { PillaiOverview } from './components/PillaiOverview';
import { AIJourney } from './components/AIJourney';
import { Curriculum } from './components/Curriculum';
import { WorkshopAgenda } from './components/WorkshopAgenda';
import { InteractivePromptDemo } from './components/InteractivePromptDemo';
import { ToolsPlayground } from './components/ToolsPlayground';
import { DisciplineUseCases } from './components/DisciplineUseCases';
import { HandsOnActivities } from './components/HandsOnActivities';
import { ResponsibleAI } from './components/ResponsibleAI';
import { LearningOutcomes } from './components/LearningOutcomes';
import { TakeawayKit } from './components/TakeawayKit';
import { WorkshopImpact } from './components/WorkshopImpact';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-pillai-light font-sans selection:bg-pillai-primary/20 selection:text-pillai-dark">
      <Navbar />
      <main>
        <Hero />
        <WhyAINow />
        <PillaiOverview />
        <AIJourney />
        <Curriculum />
        <InteractivePromptDemo />
        <WorkshopAgenda />
        <ToolsPlayground />
        <DisciplineUseCases />
        <HandsOnActivities />
        <ResponsibleAI />
        <LearningOutcomes />
        <TakeawayKit />
        <WorkshopImpact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
