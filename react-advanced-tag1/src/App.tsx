import './App.css'
import MainLayout from './layouts/MainLayout'
import Heading from './components/globals/Heading'
import EffectExercise from './components/exercises/EffectExercise'
import UserExercise from './components/exercises/UserEffect'
import UserOverview from './components/exercises/UserOverview'
import MemoCallback from './components/exercises/MemoCallback'
import RefExercise from './components/exercises/RefExercise'
import DogImagesWithLoader from './components/exercises/HocExercise/DogImg'
import ImmerExercise from './components/exercises/ImmerExercise'


function App() {

  return <MainLayout>

    <Heading />
    {/* <EffectExercise/> */}
    {/* <UserExercise/> */}
    
    {/* <MemoCallback/> */}
    <ImmerExercise />
   <DogImagesWithLoader/>
    <RefExercise />
    <UserOverview />



  </MainLayout>
}

export default App
