import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"


export function OrderCard({ Username, Phone, Email, Items, createdAt }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
        <span className="font-medium">Username:</span> {Username}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <span className="font-medium">Phone:</span>
            <span>{Phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Email:</span>
            <span>{Email}</span>
          </div>
          <div>
            <span className="font-medium">Items:</span>
            <ul className="mt-1 space-y-1">
              {Items.map((item, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span>{item.title}</span>
                  <Badge variant="secondary">{item.quantity}</Badge>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Created:</span>
            <span>{new Date(createdAt).toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

