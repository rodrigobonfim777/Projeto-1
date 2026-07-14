import {
  Card,
  Container,
  Grid,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";

import {
  IconBrain,
  IconBolt,
  IconShieldCheck,
  IconChartBar,
} from "@tabler/icons-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: IconBrain,
    title: "Inteligência Artificial",
    text: "Modelos avançados para geração de conteúdo e automação.",
  },
  {
    icon: IconBolt,
    title: "Alta Velocidade",
    text: "Processamento extremamente rápido para milhares de requisições.",
  },
  {
    icon: IconShieldCheck,
    title: "Segurança",
    text: "Proteção de dados com autenticação e criptografia.",
  },
  {
    icon: IconChartBar,
    title: "Analytics",
    text: "Visualize métricas em tempo real através de dashboards.",
  },
];

export default function Features() {
  return (
    <Container size="xl" py={80}>

      <Title
        ta="center"
        mb={10}
      >
        Recursos
      </Title>

      <Text
        ta="center"
        c="dimmed"
        mb={50}
      >
        Tudo o que você precisa para integrar IA ao seu negócio.
      </Text>

      <Grid>

        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <Grid.Col
              key={index}
              span={{ base: 12, md: 6 }}
            >
              <motion.div whileHover={{ y: -8 }}>

                <Card
                  radius="lg"
                  shadow="md"
                  withBorder
                  padding="xl"
                >
                  <ThemeIcon
                    size={60}
                    radius="xl"
                    color="violet"
                    mb="md"
                  >
                    <Icon size={30} />
                  </ThemeIcon>

                  <Title order={3}>
                    {feature.title}
                  </Title>

                  <Text mt="sm" c="dimmed">
                    {feature.text}
                  </Text>
                </Card>

              </motion.div>
            </Grid.Col>
          );
        })}

      </Grid>

    </Container>
  );
}