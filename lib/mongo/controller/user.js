import User from '../schema/userSchema.js';
import connect from '../index.js';
export async function getUserData(dat) {
    try {
        await connect();
        const data = await User.find({Email:dat});
        console.log('User data:', data);
        return {data:data};
    } catch (error) {
        console.error('Error fetching user data:', error);
        return [];
    } 
}
export async function postUserData(data) {
    try {
        await connect();
        const dat= await data;
        console.log('User data:', dat);
        const res = await User.create(dat);
        console.log('User data:', res);
        return {data:res, message:"Success!"};
    } catch (error) {
        console.error('Error posting user data:', error);
        return [];
    } 
}