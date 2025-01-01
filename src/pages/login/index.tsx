import * as React from "react";
import { Icons } from "../../components/icons";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../assets/context/userAuthContext";
import { useNavigate } from "react-router-dom";

type ISignUpProps = {
  email: string;
  password: string;
  confirmPassword: string;
};

const LogIn: React.FunctionComponent = () => {
  const { logIn, googleSignIn, gitHubSignIn } = useUserAuth();

  const navigate = useNavigate();

  const initialValue: ISignUpProps = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [userData, setUserData] = React.useState<ISignUpProps>(initialValue);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userData.email);
    try {
      if (userData.email && userData.password) {
        await logIn(userData.email, userData.password);
        navigate("/");
      } else {
        navigate("/error");
      }
    } catch (error) {
      console.log("error :", error);
    }
  };

  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log("error :", error);
    }
  };

  const handleGitHubSignIn = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      await gitHubSignIn();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card className="md:w-[35%] mx-auto text-start">
      <form onSubmit={handleSubmit}>
        <h2 className="text-red-400 text-2xl font-bold mt-8 text-center">
          <span className="text-green-600">Image</span>GRAM
        </h2>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline" onClick={handleGitHubSignIn}>
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline" onClick={handleGoogleSignIn}>
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={userData.email}
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={userData.password}
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">login</Button>
        </CardFooter>
        <p className="text-center mb-4">
          dont have an account ?{" "}
          <Link to="/signup" className="text-blue-800 font-bold">
            signUp here
          </Link>{" "}
        </p>
      </form>
    </Card>
  );
};

export default LogIn;
