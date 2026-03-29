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

interface RegisterProps {
    onSwitchToLogin?: () => void;
}

const Register = ({ onSwitchToLogin }: RegisterProps) => {
    return (
        <Card className="w-full gap-4">
            <CardHeader className="pb-1">
                <CardTitle>Crie sua conta</CardTitle>

                <CardDescription>
                    Preencha os dados abaixo para começar a usar o Prism.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Nome</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Seu nome"
                                required
                                className="h-10 lg:h-8"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="seu.email@exemplo.com"
                                required
                                className="h-10 lg:h-8"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password">Senha</Label>
                            <Input
                                id="password"
                                type="password"
                                required
                                className="h-10 lg:h-8"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="confirm-password">Confirmar senha</Label>
                            <Input
                                id="confirm-password"
                                type="password"
                                required
                                className="h-10 lg:h-8"
                            />
                        </div>
                    </div>
                </form>
            </CardContent>

            <CardFooter className="flex-col gap-3 border-none pt-2">
                <Button type="submit" className="w-full h-10 lg:h-8 hover:bg-primary-hover transition-colors duration-300">
                    Criar conta
                </Button>

                <Button variant="outline" className="w-full items-center text-white gap-2 lg:gap-3 h-10 lg:h-8 hover:bg-surface/95 transition-colors duration-300">
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
