import AboutPage from "@/components/AboutPage";

export default function page() {
  return (
    <AboutPage
      title={"NodeJs"}
      about={`
        Node.js é uma plataforma de desenvolvimento que permite a execução de
        código JavaScript no lado do servidor. Baseado no motor V8 do Google
        Chrome, o Node.js é conhecido por sua eficiência e escalabilidade. Ele é
        amplamente utilizado para construir aplicativos web, APIs e serviços em
        tempo real. Com uma vasta gama de bibliotecas e um ecossistema robusto,
        o Node.js é uma escolha popular para desenvolvedores que buscam criar
        aplicativos rápidos e escaláveis.
      `}
      link={{
        href: "https://www.devmedia.com.br/carreira-programador/?slug=back-end",
        content: "Guia de Back End",
      }}
    />
  );
}
