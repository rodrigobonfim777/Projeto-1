import {
  Button,
  Container,
  Divider,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

import { IconBrandGoogle } from "@tabler/icons-react";

export default function Register() {
  return (
    <Container size={420} my={80}>
      <Paper shadow="xl" radius="lg" p="xl" withBorder>
        <Title order={2} ta="center">
          Crie sua conta
        </Title>

        <Text c="dimmed" ta="center" mt="xs" mb="xl">
          Comece a utilizar o NeuroAI gratuitamente.
        </Text>

        <Button
          variant="default"
          leftSection={<IconBrandGoogle size={18} />}
          fullWidth
          mb="md"
        >
          Continuar com Google
        </Button>

        <Divider
          label="ou"
          labelPosition="center"
          my="lg"
        />

        <Stack>
          <TextInput
            label="Nome"
            placeholder="Seu nome"
            required
          />

          <TextInput
            label="E-mail"
            placeholder="seu@email.com"
            required
          />

          <PasswordInput
            label="Senha"
            placeholder="********"
            required
          />

          <PasswordInput
            label="Confirmar senha"
            placeholder="********"
            required
          />

          <Button fullWidth mt="md">
            Criar conta
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}