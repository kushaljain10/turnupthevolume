import {
  Header,
  Hero,
  ContractBar,
  Lore,
  Manifesto,
  Amplify,
  Token,
  Cta,
  Faq,
  Footer,
} from "./components/IndexSections";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <ContractBar />
        <Lore />
        <Manifesto />
        <Amplify />
        <Token />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
