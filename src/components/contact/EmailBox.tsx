import { Button } from "../ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const EmailBox = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          Feel free to reach out or discuss anything you need via my email or on
          my socials
        </CardTitle>
        <CardDescription>hasanalsolwn@gmail.com</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between">
        <a href="mailto:hasanalsolwn@gmail.com">
          <Button className="cursor-pointer ">Email me</Button>
        </a>
        <a download="CV" href="/resume.pdf">
          <Button className="cursor-pointer">Download CV</Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default EmailBox;
