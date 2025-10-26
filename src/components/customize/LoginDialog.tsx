"use client";

import {
  Dialog,
  Button,
  Field,
  Input,
  Stack,
  Text,
  Tabs,
  CloseButton,
} from "@chakra-ui/react";
import { useState } from "react";

export default function AuthDialog() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="ghost">{isLogin ? "Login" : "Sign up"}</Button>
      </Dialog.Trigger>

        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content maxW="sm" zIndex="modal">
            <Dialog.Header>
              <Dialog.Title>{isLogin ? "Log in" : "Sign up"}</Dialog.Title>
              <Dialog.CloseTrigger />
            </Dialog.Header>

            <Dialog.Body>
              <Tabs.Root
                value={isLogin ? "login" : "signup"}
                onValueChange={(v) => setIsLogin(v.value === "login")}
              >
                <Tabs.List mb={4}>
                  <Tabs.Trigger value="login">Login</Tabs.Trigger>
                  <Tabs.Trigger value="signup">Sign Up</Tabs.Trigger>
                </Tabs.List>

                {/* 🔸 登录表单 */}
                <Tabs.Content value="login">
                  <form onSubmit={handleSubmit} id="login-form">
                    <Stack gap={4}>
                      <Field.Root>
                        <Field.Label>Email</Field.Label>
                        <Input name="email" type="email" placeholder="you@example.com" required />
                      </Field.Root>

                      <Field.Root>
                        <Field.Label>Password</Field.Label>
                        <Input name="password" type="password" placeholder="••••••••" required />
                      </Field.Root>

                      <Text color="gray.500" fontSize="sm">
                        No account?{" "}
                        <Text
                          as="span"
                          color="cyan.600"
                          cursor="pointer"
                          onClick={() => setIsLogin(false)}
                        >
                          Sign up
                        </Text>
                      </Text>
                    </Stack>
                  </form>
                </Tabs.Content>

                <Tabs.Content value="signup">
                  <form onSubmit={handleSubmit} id="signup-form">
                    <Stack gap={4}>
                      <Field.Root>
                        <Field.Label>Full Name</Field.Label>
                        <Input name="name" placeholder="Jane Doe" required />
                      </Field.Root>

                      <Field.Root>
                        <Field.Label>Email</Field.Label>
                        <Input name="email" type="email" placeholder="you@example.com" required />
                      </Field.Root>

                      <Field.Root>
                        <Field.Label>Password</Field.Label>
                        <Input name="password" type="password" placeholder="Create a password" required />
                      </Field.Root>

                      <Text color="gray.500" fontSize="sm">
                        Already have an account?{" "}
                        <Text
                          as="span"
                          color="cyan.600"
                          cursor="pointer"
                          onClick={() => setIsLogin(true)}
                        >
                          Log in
                        </Text>
                      </Text>
                    </Stack>
                  </form>
                </Tabs.Content>
              </Tabs.Root>
            </Dialog.Body>

            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>

              <Button
                type="submit"
                form={isLogin ? "login-form" : "signup-form"}
                colorPalette="cyan"
                variant="surface"
              >
                {isLogin ? "Continue" : "Create account"}
              </Button>
            </Dialog.Footer>

            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
    </Dialog.Root>
  );
}