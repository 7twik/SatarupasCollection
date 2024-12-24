import { NextResponse,NextRequest } from "next/server";
import { getAllPastData } from "../../../lib/mongo/controller/past";
export async function GET(req,res){
    try{
        const {data,err} = await getAllPastData();
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