import { NextResponse,NextRequest } from "next/server";
import { createItem,getItem,deleteItem } from "../../../../lib/mongo/controller/item";
export async function GET(req,res){
    try{
        const {data,err} = await getItem();
        console.log("ITEM DATA",data);
        if(err){
            throw new Error(err);
        }
        return NextResponse.json({
            data: data,
            message: "Hello",
        });
    }catch(error){
        console.log('Error fetching Com dataaa:', error);
        return NextResponse.json({
            data: [],
            error: error,
            message: "Error fetching Com data",
        });
    }
}
export async function POST(req,res){
    try{
        let dataa = await req.json();
        console.log("DATA",dataa);
        const {data,err} = await createItem({title:dataa.title,category:dataa.category,price:dataa.price,description:dataa.description,img:dataa.img});
        if(err){
            throw new Error(err);
        }
        return NextResponse.json({
            data: data,
            message: "Success!",
        });
    }catch(error){
        console.log('Error fetching Com dataaa:', error);
        return NextResponse.json({
            data: [],
            error: error,
            message: "Error posting Com data",
        });
    }
}

export async function DELETE(req,res){
    try{
        let dataa = await req.json();
        console.log("DATA",dataa);
        const {data,err} = await deleteItem({title:dataa.title});
        if(err){
            throw new Error(err);
        }
        return NextResponse.json({
            data: data,
            message: "Success!",
        });
    }catch(error){
        console.log('Error fetching Com dataaa:', error);
        return NextResponse.json({
            data: [],
            error: error,
            message: "Error deleting Com data",
        });
    }
}