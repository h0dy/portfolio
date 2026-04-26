import { Card, CardContent } from "../ui/card";

const MetricCard = ({ value, label }: { value: string; label: string }) => {
  return (
    <Card className="bg-muted/50 border-0 shadow-none">
      <CardContent className="p-4">
        <p className="text-2xl font-medium font-mono tracking-tight">{value}</p>
        <p className="text-xs text-muted-foreground mt-1">{label}</p>
      </CardContent>
    </Card>
  );
};
export default MetricCard;
