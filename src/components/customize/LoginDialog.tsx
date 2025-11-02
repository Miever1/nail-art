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
  MenuRoot as Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  Separator,
} from "@chakra-ui/react";
import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/shared/lib/api";
import { toaster } from "@/components/ui/toaster";
import { PasswordInput } from "@/components/ui/password-input";
import { useCurrentUser, useAuthHelpers } from "@/shared/lib/useCurrentUser";
import { useLoadingStore } from "@/shared/store/useLoadingStore";

import type { AxiosError } from "axios";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});
type LoginForm = z.infer<typeof loginSchema>;

const signupSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});
type SignupForm = z.infer<typeof signupSchema>;

export default function AuthDialog() {
  const { data: currentUser } = useCurrentUser();
  const displayName = useMemo(
    () => currentUser?.name || currentUser?.email?.split("@")[0] || "User",
    [currentUser]
  );

  const { afterLogin, logout } = useAuthHelpers();
  const { setLoading } = useLoadingStore();

  const [openDialog, setOpenDialog] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  // login form
  const {
    register: registerLogin,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
    reset: resetLogin,
  } = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });

  // signup form
  const {
    register: registerSignup,
    handleSubmit: handleSignupSubmit,
    formState: { errors: signupErrors },
    reset: resetSignup,
  } = useForm<SignupForm>({ resolver: zodResolver(signupSchema) });

  const onLogin = async (data: LoginForm) => {
    try {
      setLoading(true);
      await api.post("/auth/login", data);
      await afterLogin();
      resetLogin();
      setOpenDialog(false);
      toaster.create({ title: "Welcome back!", type: "success" });
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      toaster.create({
        title: "Login failed",
        description: error?.message || "Please try again",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const onSignup = async (data: SignupForm) => {
    try {
      setLoading(true);
      await api.post("/users/register", data);
      await api.post("/auth/login", { email: data.email, password: data.password });
      await afterLogin();
      resetSignup();
      setIsLogin(true);
      setOpenDialog(false);
      toaster.create({ title: "Account created", type: "success" });
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      toaster.create({
        title: "Sign up failed",
        description: error?.message || "Please try again",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const onLogout = async () => {
    try {
      setLoading(true);
      await logout();
      toaster.create({ title: "Logged out", type: "success" });
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      toaster.create({
        title: "Logout failed",
        description: error?.message || "Please try again",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // If logged in, show a user menu instead of opening dialog
  if (currentUser) {
    return (
      <Menu>
        <MenuTrigger asChild>
          <Button variant="ghost">Hello, {displayName}</Button>
        </MenuTrigger>
        <MenuContent>
          <Separator />
          <MenuItem value="logout" onClick={onLogout}>
            Logout
          </MenuItem>
        </MenuContent>
      </Menu>
    );
  }

  // Not logged in → dialog with login / signup tabs
  return (
    <Dialog.Root open={openDialog} onOpenChange={(e) => setOpenDialog(e.open)}>
      <Dialog.Trigger asChild>
        <Button variant="ghost">Log in</Button>
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
              {/* Login */}
              <Tabs.Content value="login">
                <form onSubmit={handleLoginSubmit(onLogin)} noValidate>
                  <Stack gap={4}>
                    <Field.Root invalid={!!loginErrors.email}>
                      <Field.Label>Email</Field.Label>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...registerLogin("email")}
                      />
                      {loginErrors.email && (
                        <Field.ErrorText>{loginErrors.email.message}</Field.ErrorText>
                      )}
                    </Field.Root>

                    <Field.Root invalid={!!loginErrors.password}>
                      <Field.Label>Password</Field.Label>
                      <PasswordInput
                        type="password"
                        placeholder="••••••••"
                        {...registerLogin("password")}
                      />
                      {loginErrors.password && (
                        <Field.ErrorText>{loginErrors.password.message}</Field.ErrorText>
                      )}
                    </Field.Root>

                    <Stack direction="row" justify="flex-end" mt={2}>
                      <Button
                        type="submit"
                        colorPalette="cyan"
                        variant="surface"
                      >
                        Login
                      </Button>
                    </Stack>

                    <Text color="gray.500" fontSize="sm">
                      No account?{" "}
                      <Text as="span" color="cyan.600" cursor="pointer" onClick={() => setIsLogin(false)}>
                        Sign up
                      </Text>
                    </Text>
                  </Stack>
                </form>
              </Tabs.Content>

              {/* Sign up */}
              <Tabs.Content value="signup">
                <form onSubmit={handleSignupSubmit(onSignup)} noValidate>
                  <Stack gap={4}>
                    <Field.Root invalid={!!signupErrors.name}>
                      <Field.Label>Full Name</Field.Label>
                      <Input placeholder="Jane Doe" {...registerSignup("name")} />
                      {signupErrors.name && (
                        <Field.ErrorText>{signupErrors.name.message}</Field.ErrorText>
                      )}
                    </Field.Root>

                    <Field.Root invalid={!!signupErrors.email}>
                      <Field.Label>Email</Field.Label>
                      <Input type="email" placeholder="you@example.com" {...registerSignup("email")} />
                      {signupErrors.email && (
                        <Field.ErrorText>{signupErrors.email.message}</Field.ErrorText>
                      )}
                    </Field.Root>

                    <Field.Root invalid={!!signupErrors.password}>
                      <Field.Label>Password</Field.Label>
                      <PasswordInput
                        type="password"
                        placeholder="Create a password"
                        {...registerSignup("password")}
                      />
                      {signupErrors.password && (
                        <Field.ErrorText>{signupErrors.password.message}</Field.ErrorText>
                      )}
                    </Field.Root>

                    <Stack direction="row" justify="flex-end" mt={2}>
                      <Button
                        type="submit"
                        colorPalette="cyan"
                        variant="surface"
                      >
                        Create account
                      </Button>
                    </Stack>

                    <Text color="gray.500" fontSize="sm">
                      Already have an account?{" "}
                      <Text as="span" color="cyan.600" cursor="pointer" onClick={() => setIsLogin(true)}>
                        Log in
                      </Text>
                    </Text>
                  </Stack>
                </form>
              </Tabs.Content>
            </Tabs.Root>
          </Dialog.Body>

          <Dialog.CloseTrigger asChild>
            <CloseButton size="sm" />
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}