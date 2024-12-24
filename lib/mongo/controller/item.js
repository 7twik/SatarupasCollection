import Item from '../schema/itemSchema';
import connect from '../index.js';

export async function createItem(data) {
    try {
        await connect();
        
        const dat= await data;
        console.log('Item data:', dat);
        const res = await Item.create(dat);
        console.log('Item created:', res);
        return res;
    }
     catch (error) {
        console.error('Error posting pastorder data:', error);
        return [];
    }
}

export async function updateItem() {
    try {
        await connect();
        const id=dat.id;
        const res= await Item.update({_id:id},dat);
        console.log('Item updated:', res);
        return res;
    }
        catch (error) {
            console.error('Error posting pastorder data:', error);
            return [];
        }
}

export async function getItem() {
    try {
        await connect();
        const res = await Item.find();
        console.log('Items:', res);
        return {data:res};
    }
        catch (error) {
            console.error('Error posting item data:', error);
            return [];
        }
}
export async function deleteItem(dat) {
    try {
        await connect();
        const title=await dat.title;
        const res= await Item.deleteOne({title:title});
        console.log('Item deleted:', res);
        return res;
    }
        catch (error) {
            console.error('Error posting pastorder data:', error);
            return [];
        }
}

