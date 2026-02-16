import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AlertBox = ({ text }: { text: string }) => {
  return (
    <Alert variant="default">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Alert</AlertTitle>
      <AlertDescription>{text}</AlertDescription>
    </Alert>
  );
};

export default AlertBox;
