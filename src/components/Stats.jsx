import { Card, Container, Grid, Text, Title } from "@mantine/core";
import { motion } from "framer-motion";

const stats = [
  {
    number: "50K+",
    title: "Usuários",
  },
  {
    number: "99.9%",
    title: "Disponibilidade",
  },
  {
    number: "120+",
    title: "Países",
  },
  {
    number: "24/7",
    title: "Suporte",
  },
];

export default function Stats() {
  return (
    <Container size="xl" py={80}>

      <Grid>

        {stats.map((item, index) => (

          <Grid.Col
            key={index}
            span={{ base: 12, sm: 6, md: 3 }}
          >

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
            >

              <Card
                shadow="lg"
                radius="lg"
                padding="xl"
                withBorder
              >

                <Title order={2}>
                  {item.number}
                </Title>

                <Text c="dimmed">
                  {item.title}
                </Text>

              </Card>

            </motion.div>

          </Grid.Col>

        ))}

      </Grid>

    </Container>
  );
}