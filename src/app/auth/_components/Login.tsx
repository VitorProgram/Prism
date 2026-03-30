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

interface LoginProps { 
    onSwitchtoRegister?: () => void;
}               

const Login = ({ onSwitchtoRegister }: LoginProps) => {
    return (
        <Card className="w-full gap-4">
            <CardHeader className="pb-1">
                <CardTitle>Faça login na sua conta</CardTitle>

                <CardDescription>
                    Acesse seu painel e acompanhe as novidades da sua stack.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="seu@email.com"
                                required
                                className="h-10 lg:h-8"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="password">Senha</Label>
                            <Input
                                id="password"
                                className="h-10 lg:h-8"
                                type="password"
                                required
                            />

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
                <Button type="submit" className="w-full h-10 lg:h-8 hover:bg-primary-hover transition-colors duration-300">
                    Login
                </Button>

                <Button variant="outline" className="w-full items-center gap-2 lg:gap-3 h-10 lg:h-8 bg-surface-raised hover:bg-surface-overlay transition-colors duration-300">
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
