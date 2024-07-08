import AboutPage from "@/components/AboutPage";

export default function frontend() {
  return (
    <AboutPage
      title={"ReactJs"}
      about={`
        O React.js é uma biblioteca JavaScript utilizada para construir
        interfaces de usuário interativas e eficientes. Ele é amplamente adotado
        devido à sua abordagem baseada em componentes e à facilidade de criar
        aplicativos escaláveis. O React permite o desenvolvimento de Single Page
        Applications (SPAs) de forma eficiente e flexível.
      `}
      link={{
        href: "https://www.devmedia.com.br/carreira-programador/?slug=front-end",
        content: "Guia de Front End",
      }}
    />
  );
}
