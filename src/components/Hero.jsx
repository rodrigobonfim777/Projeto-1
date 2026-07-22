import {
  Badge,
  Button,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";

import {
  IconSparkles,
  IconArrowRight,
} from "@tabler/icons-react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <Container size="xl" py={120}>
      <Stack align="center">
        <Badge
          size="lg"
          radius="xl"
          color="violet"
          variant="light"
        >
          IA • Nova geração
        </Badge>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title
            ta="center"
            order={1}
            style={{
              fontSize: 70,
              maxWidth: 900,
              lineHeight: 1.1,
            }}
          >
            Crie aplicações
            inteligentes
            com poucos cliques.
          </Title>
        </motion.div>

        <Text
          ta="center"
          maw={700}
          size="xl"
          c="dimmed"
        >
          Uma plataforma completa para geração de conteúdo,
          automação, dashboards e inteligência artificial.
        </Text>

        <Group mt="md">
          <Button
            size="lg"
            radius="xl"
            color="blue"
            rightSection={<IconArrowRight size={18} />}
            onClick={() => navigate("/register")}
          >
            Começar Agora
          </Button>

          <Button
            size="lg"
            radius="xl"
            variant="default"
            onClick={() =>
              document.getElementById("demo")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Demonstração
          </Button>
        </Group>

        <Paper
          id="demo"
          radius="xl"
          shadow="xl"
          withBorder
          mt={80}
          p={50}
          w="100%"
        >
          <ThemeIcon
            size={80}
            radius="xl"
            color="violet"
            mx="auto"
          >
            <IconSparkles size={45} />
          </ThemeIcon>

          <Title ta="center" mt="lg">
            Dashboard IA
          </Title>

          <Text
            ta="center"
            c="dimmed"
            mt="md"
          >
            Em breve colocaremos uma imagem real do dashboard.
          </Text>
        </Paper>
      </Stack>
    </Container>
  );
}