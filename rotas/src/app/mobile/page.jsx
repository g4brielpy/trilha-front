import AboutPage from "@/components/AboutPage";

export default function page() {
  return (
    <AboutPage
      title={"React Native"}
      about={`
        React Native é um framework de desenvolvimento de aplicativos móveis que
        permite a criação de aplicativos nativos usando JavaScript e React. Ele
        permite o desenvolvimento de aplicativos para iOS e Android usando uma
        base de código compartilhada, proporcionando uma experiência de
        desenvolvimento eficiente e rápida. Com React Native, os desenvolvedores
        podem criar aplicativos móveis robustos e de alto desempenho de forma
        simplificada.
      `}
      link={{
        href: "https://www.devmedia.com.br/carreira-programador/?slug=mobile",
        content: "Guia de Mobile",
      }}
    />
  );
}
