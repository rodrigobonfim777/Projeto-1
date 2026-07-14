import {
  AppShell,
  Button,
  Container,
  Group,
  Burger,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <AppShell.Header>

      <Container
        size="xl"
        h="100%"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >

        <h2
          style={{
            fontWeight: 700,
            fontSize: 30,
            color: "#845EF7",
          }}
        >
          NeuroAI
        </h2>

        <Group visibleFrom="md">

          <Button variant="subtle">
            Home
          </Button>

          <Button variant="subtle">
            Recursos
          </Button>

          <Button variant="subtle">
            Planos
          </Button>

          <Button variant="subtle">
            FAQ
          </Button>

          <Button variant="subtle">
            Contato
          </Button>

        </Group>

        <Group>

          <Button radius="xl">
            Entrar
          </Button>

          <Burger
            hiddenFrom="md"
            opened={opened}
            onClick={toggle}
          />

        </Group>

      </Container>

    </AppShell.Header>
  );
}