import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Button from './Button'
import ShadCollapsible from './ShadCollapsible'



function ProductCard(props) {

  const trigger = "Click for more Details..."
  const content1 = "Delicate"
  const content2 = "Versatile"

  return (

    <div className='flex flex-col mx-16'>
      <div className=" w-96 p-6 ">
        <Card className="border-2">
          <CardHeader>
            <CardTitle>{props.title}</CardTitle>
            <CardDescription>{props.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{props.content}</p>
          </CardContent>
          <CardFooter>
            <Button>Buy Now</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="ml-3 ">
        <ShadCollapsible trigger={trigger} content1={content1} content2={content2} />
      </div>

    </div>
  )
}

export default ProductCard