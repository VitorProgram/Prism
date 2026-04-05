"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"

interface RegisterProps {
    onSwitchToLogin?: () => void;
}

type FormData = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
}

const Register = ({ onSwitchToLogin }: RegisterProps) => {
    const { 
        register,
        handleSubmit,
        getValues,
        formState: { errors, isSubmitting }
    } = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <Card className="w-full gap-4">
            <CardHeader className="pb-1">
                <CardTitle>Crie sua conta</CardTitle>

                <CardDescription>
                    Assine as tecnologias que você usa e receba um digest por e-mail.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} id="register-form">
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Nome</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Seu nome"
                                className="h-10 lg:h-8"

                                {...register('name', {
                                    required: 'Nome obrigatório',
                                    minLength: {
                                        value: 3,
                                        message: "Mínimo de 3 caracteres",
                                    }
                                })}
                            />
                            {errors.name && <span className="text-destructive/80">{errors.name.message}</span>}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="text"
                                placeholder="seu@email.com"
                                className="h-10 lg:h-8"
                                
                                {...register('email', {
                                    required: 'E-mail obrigatório',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'E-mail inválido',
                                    },
                                })}
                            />
                            {errors.email && <span className="text-destructive/80">{errors.email.message}</span>}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password">Senha</Label>
                            <Input
                                id="password"
                                type="password"
                                className="h-10 lg:h-8"
                                
                                {...register('password', {
                                    required: "Senha obrigatório",
                                    minLength: {
                                        value: 8,
                                        message: "Mínimo de 8 caracteres",
                                    }
                                })}
                            />
                            {errors.password && <span className="text-destructive/80">{errors.password.message}</span>}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="confirm-password">Confirmar senha</Label>
                            <Input
                                id="confirm-password"
                                type="password"
                                className="h-10 lg:h-8"
                                
                                {...register('confirmPassword', {
                                    required: "Confirmação de senha obrigatório",
                                    validate: (value) => 
                                        value === getValues("password") || "As senhas não coincidem"
                                })}
                            />
                            {errors.confirmPassword && <span className="text-destructive/80">{errors.confirmPassword.message}</span>}
                        </div>
                    </div>
                </form>
            </CardContent>

            <CardFooter className="flex-col gap-3 border-none pt-2">
                <Button form="register-form" type="submit" className="w-full h-10 lg:h-8 hover:bg-primary-hover transition-colors duration-300" disabled={isSubmitting}>
                    Criar conta
                </Button>

                <Button variant="outline" className="w-full items-center gap-2 lg:gap-3 h-10 lg:h-8 bg-surface-raised hover:bg-surface-overlay transition-colors duration-300" disabled={isSubmitting}>
                    Cadastrar com Google
                    <Image src="/icons/google.svg" alt="Google" width={16} height={16} />
                </Button>

                <Link href="#" className="m-auto text-sm" onClick={onSwitchToLogin}>
                    Já tem uma conta?{" "}
                    <span className="font-medium hover:underline">Faça login</span>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default Register
