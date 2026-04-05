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

interface LoginProps { 
    onSwitchtoRegister?: () => void;
}               

type FormData = {
    email: string,
    password: string,
}

const Login = ({ onSwitchtoRegister }: LoginProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<FormData>() 

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <Card className="w-full gap-4">
            <CardHeader className="pb-1">
                <CardTitle>Faça login na sua conta</CardTitle>

                <CardDescription>
                    Acesse seu painel e acompanhe as novidades da sua stack.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} id="login-form">
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            {/* Tipo text para a validaçao ser por parte do rhf */}
                            <Input
                                id="email"
                                type="text"
                                placeholder="seu@email.com"
                                className="h-10 lg:h-8"
                                {...register("email", {
                                    required: "E-mail obrigatório",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'E-mail inválido',
                                    },
                                })}
                            />
                            {errors.email && <span className="text-destructive/80">{errors.email.message}</span>}
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="password">Senha</Label>
                            <div>
                                <Input
                                    id="password"
                                    className="h-10 lg:h-8"
                                    type="password"
                                    {...register("password", {
                                        required: "Senha obrigatório",
                                        minLength: {
                                            value: 8,
                                            message: "Mínimo de 8 caracteres"
                                        }
                                    })}
                                />
                                {errors.password && <span className="text-destructive/80">{errors.password.message}</span>}
                            </div>

                            <div className="py-0.5 border-b border-transparent hover:border-primary-foreground transition-all duration-300 w-fit ml-auto">
                                <Link href="#" className="ml-auto text-sm">
                                    Esqueceu sua senha?
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </CardContent>

            <CardFooter className="flex-col gap-3 border-none pt-2">
                <Button form="login-form" disabled={isSubmitting} type="submit" className="w-full h-10 lg:h-8 hover:bg-primary-hover transition-colors duration-300">
                    Login
                </Button>

                <Button disabled={isSubmitting} variant="outline" className="w-full items-center gap-2 lg:gap-3 h-10 lg:h-8 bg-surface-raised hover:bg-surface-overlay transition-colors duration-300">
                    Login com Google
                    <Image src="/icons/google.svg" alt="Google" width={16} height={16} />
                </Button>

                <Link href="#" className="m-auto text-sm" onClick={onSwitchtoRegister}>
                    Ainda não tem uma conta?{" "}
                    <span className="font-medium hover:underline">Cadastre-se</span>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default Login
