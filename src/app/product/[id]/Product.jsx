import Image from 'next/image'
import { Badge } from "../../../components/ui/badge"
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card"


export default function Product({ title, description, img, category, price }) {
  return (
    <Card className="max-w-2xl my-3 mx-auto">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <Badge className="mb-2">{category}</Badge>
            <CardTitle className="text-2xl md:text-3xl">{title}</CardTitle>
          </div>
          <div className="text-2xl font-bold">${price}</div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative w-full h-64 md:h-80">
          <Image
            src={img}
            alt={title}
            fill
            className="object-contain rounded-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button className="w-full">Add to Cart</Button>
        <div className="flex justify-between w-full">
          <Button variant="outline" className="w-[48%]" disabled>
            Add Review (Coming Soon)
          </Button>
          <Button variant="outline" className="w-[48%]" disabled>
            View Reviews (Coming Soon)
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
