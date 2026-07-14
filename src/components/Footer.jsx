import {
  Container,
  Divider,
  Group,
  Text,
  Title,
} from "@mantine/core";

export default function Footer() {
  return (
    <Container
      size="xl"
      py={50}
    >

      <Divider mb={30} />

      <Group justify="space-between">

        <div>

          <Title order={3}>
            NeuroAI
          </Title>

          <Text c="dimmed">
            © 2026 Todos os direitos reservados.
          </Text>

        </div>

        <Group>

          <Text>Home</Text>

          <Text>Recursos</Text>

          <Text>Planos</Text>

          <Text>Contato</Text>

        </Group>

      </Group>

    </Container>
  );
}