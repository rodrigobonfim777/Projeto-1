import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconBrandGoogle } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Container size={420} my={80}>
      <Paper shadow="xl" radius="lg" p="xl" withBorder>
        <Title order={2} ta="center">
          Bem-vindo de volta
        </Title>

        <Text c="dimmed" ta="center" mt="xs" mb="xl">
          Entre para acessar sua conta e continuar usando o NeuroAI.
        </Text>

        <Button
          variant="default"
          leftSection={<IconBrandGoogle size={18} />}
          fullWidth
          mb="md"
        >
          Continuar com Google
        </Button>

        <Stack>
          <TextInput
            label="E-mail"
            placeholder="seu@email.com"
            type="email"
            required
          />

          <PasswordInput
            label="Senha"
            placeholder="Sua senha"
            required
          />

          <Group justify="space-between">
            <Checkbox label="Lembrar de mim" />
            <Anchor component="button" type="button" size="sm">
              Esqueci minha senha
            </Anchor>
          </Group>

          <Button fullWidth mt="sm">
            Entrar
          </Button>
        </Stack>

        <Text ta="center" mt="xl" size="sm">
          Ainda não tem uma conta?{" "}
          <Anchor component={Link} to="/register">
            Crie sua conta gratuitamente
          </Anchor>
        </Text>
      </Paper>
    </Container>
  );
}
