import {
  Accordion,
  Container,
  Text,
  Title,
} from "@mantine/core";

export default function FAQ() {
  return (
    <Container
      size="md"
      py={100}
    >

      <Title ta="center">
        Perguntas Frequentes
      </Title>

      <Text
        ta="center"
        c="dimmed"
        mb={40}
      >
        Tire suas dúvidas.
      </Text>

      <Accordion variant="separated">

        <Accordion.Item value="1">

          <Accordion.Control>
            Como funciona a plataforma?
          </Accordion.Control>

          <Accordion.Panel>
            Basta criar uma conta e começar a utilizar as ferramentas de IA.
          </Accordion.Panel>

        </Accordion.Item>

        <Accordion.Item value="2">

          <Accordion.Control>
            Existe plano gratuito?
          </Accordion.Control>

          <Accordion.Panel>
            Sim. Você pode utilizar diversas funcionalidades sem custo.
          </Accordion.Panel>

        </Accordion.Item>

        <Accordion.Item value="3">

          <Accordion.Control>
            Existe API?
          </Accordion.Control>

          <Accordion.Panel>
            Sim. Os planos Pro e Enterprise possuem acesso à API.
          </Accordion.Panel>

        </Accordion.Item>

      </Accordion>

    </Container>
  );
}