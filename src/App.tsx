import TopStrip from './components/TopStrip'
import Hero from './components/Hero'
import TheMenu from './components/TheMenu'
import RecipeCard from './components/RecipeCard'
import FamilyTiers from './components/FamilyTiers'
import ReviewWall from './components/ReviewWall'
import HealthInspector from './components/HealthInspector'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-napkin text-ink">
      <TopStrip />
      <main>
        <Hero />
        <TheMenu />
        <RecipeCard />
        <FamilyTiers />
        <ReviewWall />
        <HealthInspector />
      </main>
      <Footer />
    </div>
  )
}
