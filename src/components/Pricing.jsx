import {
  Badge,
  Button,
  Card,
  Container,
  Grid,
  List,
  Text,
  Title,
} from "@mantine/core";

import {
  IconCheck
} from "@tabler/icons-react";

const plans = [
  {
    name: "Free",
    price: "R$0",
    badge: "",
    features: [
      "100 consultas",
      "Suporte por e-mail",
      "Dashboard básico",
    ],
  },
  {
    name: "Pro",
    price: "R$99",
    badge: "Mais Popular",
    features: [
      "Consultas ilimitadas",
      "API",
      "Dashboard completo",
      "IA Avançada",
    ],
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    badge: "",
    features: [
      "Tudo do Pro",
      "Suporte dedicado",
      "Integrações",
      "Treinamento",
    ],
  },
];

export default function Pricing() {
  return (
    <Container size="xl" py={100}>

      <Title ta="center">
        Planos
      </Title>

      <Text ta="center" c="dimmed" mb={50}>
        Escolha o plano ideal para sua empresa.
      </Text>

      <Grid>

        {plans.map((plan) => (

          <Grid.Col
            span={{ base: 12, md: 4 }}
            key={plan.name}
          >

            <Card
              withBorder
              radius="lg"
              shadow="md"
              padding="xl"
              h="100%"
            >

              {plan.badge && (
                <Badge
                  color="violet"
                  mb="md"
                >
                  {plan.badge}
                </Badge>
              )}

              <Title order={3}>
                {plan.name}
              </Title>

              <Title mt="md">
                {plan.price}
              </Title>

              <List
                mt="lg"
                spacing="md"
                icon={<IconCheck size={18} />}
              >

                {plan.features.map((item) => (
                  <List.Item key={item}>
                    {item}
                  </List.Item>
                ))}

              </List>

              <Button
                fullWidth
                mt="xl"
              >
                Escolher
              </Button>

            </Card>

          </Grid.Col>

        ))}

      </Grid>

    </Container>
  );
}