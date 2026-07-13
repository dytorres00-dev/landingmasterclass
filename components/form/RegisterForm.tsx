"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { TextField } from "./TextField";
import { RadioGroup } from "./RadioGroup";
import { SuccessState } from "./SuccessState";
import { ErrorState } from "./ErrorState";
import {
  registerSchema,
  ROL_LABELS,
  USO_IA_LABELS,
  RETO_LABELS,
  type RegisterInput,
} from "@/lib/schema";

type Status = "idle" | "submitting" | "success" | "error";

const rolOptions = (Object.entries(ROL_LABELS) as Array<
  [RegisterInput["rol"], string]
>).map(([value, label]) => ({ value, label }));

const usoIAOptions = (Object.entries(USO_IA_LABELS) as Array<
  [RegisterInput["usoIA"], string]
>).map(([value, label]) => ({ value, label }));

const retoOptions = (Object.entries(RETO_LABELS) as Array<
  [RegisterInput["reto"], string]
>).map(([value, label]) => ({ value, label }));

export function RegisterForm() {
  const reduced = useReducedMotion();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>(
    "No pudimos guardar tu registro. Intenta de nuevo en un momento.",
  );
  const [submittedNombre, setSubmittedNombre] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
      nombre: "",
      email: "",
      whatsapp: "",
      rol: undefined as unknown as RegisterInput["rol"],
      usoIA: undefined as unknown as RegisterInput["usoIA"],
      reto: undefined as unknown as RegisterInput["reto"],
    },
  });

  const rolValue = watch("rol");
  const usoIAValue = watch("usoIA");
  const retoValue = watch("reto");

  const onSubmit: SubmitHandler<RegisterInput> = async (data) => {
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const body = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        message?: string;
      };

      if (!res.ok || !body.ok) {
        setErrorMessage(
          body.message ||
            "No pudimos guardar tu registro. Intenta de nuevo en un momento.",
        );
        setStatus("error");
        return;
      }

      setSubmittedNombre(data.nombre);
      setStatus("success");
    } catch {
      setErrorMessage(
        "Parece que hubo un problema de conexión. Revisa tu internet e intenta de nuevo.",
      );
      setStatus("error");
    }
  };

  const handleRetry = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  const handleReset = () => {
    reset();
    setStatus("idle");
    setErrorMessage("");
  };

  const transition = reduced
    ? { duration: 0 }
    : { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
        >
          <SuccessState nombre={submittedNombre} />
        </motion.div>
      ) : status === "error" ? (
        <motion.div
          key="error"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
        >
          <ErrorState message={errorMessage} onRetry={handleRetry} />
        </motion.div>
      ) : (
        <motion.form
          key="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
          className="flex flex-col gap-7"
        >
          <TextField
            label="Nombre completo"
            autoComplete="name"
            placeholder="¿Cómo te llamamos?"
            error={errors.nombre?.message}
            {...register("nombre")}
          />

          <TextField
            label="Email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="tu@correo.com"
            error={errors.email?.message}
            {...register("email")}
          />

          <TextField
            label="WhatsApp"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+57 300 000 0000"
            helper="Te enviaremos un recordatorio del evento por acá."
            error={errors.whatsapp?.message}
            {...register("whatsapp")}
          />

          <RadioGroup
            name="rol"
            legend="¿Cuál es tu rol?"
            options={rolOptions}
            value={rolValue}
            onChange={(v) =>
              setValue("rol", v, { shouldValidate: true, shouldDirty: true })
            }
            error={errors.rol?.message}
          />

          <RadioGroup
            name="usoIA"
            legend="¿Tu negocio ya usa IA de alguna forma?"
            options={usoIAOptions}
            value={usoIAValue}
            onChange={(v) =>
              setValue("usoIA", v, { shouldValidate: true, shouldDirty: true })
            }
            error={errors.usoIA?.message}
          />

          <RadioGroup
            name="reto"
            legend="¿Cuál es tu mayor reto hoy?"
            options={retoOptions}
            value={retoValue}
            onChange={(v) =>
              setValue("reto", v, { shouldValidate: true, shouldDirty: true })
            }
            error={errors.reto?.message}
          />

          <div className="pt-2 flex flex-col gap-3">
            <Button
              type="submit"
              variant="primary"
              fullWidth
              loading={status === "submitting"}
            >
              Reservar mi lugar
            </Button>
            <p className="text-[12px] text-carbon/50 text-center leading-relaxed">
              Al registrarte aceptas recibir comunicaciones sobre esta
              masterclass. No spam, no vendemos tus datos.
            </p>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
