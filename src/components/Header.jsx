import {
  ActionIcon,
  AppShell,
  Button,
  Container,
  Group,
  Burger,
  Tooltip,
} from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useMantineColorScheme } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const navigate = useNavigate();
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

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
          <Tooltip label={isDark ? "Usar tema claro" : "Usar tema escuro"}>
            <ActionIcon
              variant="default"
              size="lg"
              radius="xl"
              aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
              onClick={() => setColorScheme(isDark ? "light" : "dark")}
            >
              {isDark ? <IconSun size={18} /> : <IconMoon size={18} />}
            </ActionIcon>
          </Tooltip>

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
