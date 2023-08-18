import { ArticlesContainer } from "./components/ArticlesContainer"
import { Header } from "./components/Header"
import { MainArticle } from "./components/MainArticle.jsx"
import { NewContainer } from "./components/NewContainer"


function App() {
  

  return (
    <main className="px-4 pt-6">
      <Header></Header>
      <div className="lg:flex lg:gap-8">
        <MainArticle></MainArticle>
        <NewContainer></NewContainer>
      </div>
      <ArticlesContainer></ArticlesContainer>
    </main>
  )
}

export default App
