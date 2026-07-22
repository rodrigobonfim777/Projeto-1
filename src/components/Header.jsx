import {
  AppShell,
  Button,
  Container,
  Group,
  Burger,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

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
            cursor: "pointer",
          }}
          onClick={() => scrollToSection("home")}
        >
          NeuroAI
        </h2>

        <Group visibleFrom="md">
          <Button
            variant="subtle"
            onClick={() => scrollToSection("home")}
          >
            Home
          </Button>

          <Button
            variant="subtle"
            onClick={() => scrollToSection("features")}
          >
            Recursos
          </Button>

          <Button
            variant="subtle"
            onClick={() => scrollToSection("pricing")}
          >
            Planos
          </Button>

          <Button
            variant="subtle"
            onClick={() => scrollToSection("faq")}
          >
            FAQ
          </Button>

          <Button
            variant="subtle"
            onClick={() => scrollToSection("contact")}
          >
            Contato
          </Button>
        </Group>

        <Group>
          <Button
            radius="xl"
            onClick={() => navigate("/login")}
          >
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