import Past from '../schema/pastOrderSchema.js';
import connect from '../index.js';
const nodemailer = require('nodemailer');


const sender=process.env.NEXT_PUBLIC_PERSONAL_EMAIL
const pass=process.env.NEXT_PUBLIC_EMAIL_PASSWORD

        export async function getPastData(dat) {
    try {
        await connect();
        const data = await Past.find({Email:dat});
        console.log('Past data:', data);
        return {data:data};
    } catch (error) {
        console.error('Error fetching pastorder data:', error);
        return [];
    } 
}
export async function getAllPastData() {
  try {
      await connect();
      const data = await Past.find();
      console.log('Past data:', data);
      return {data:data};
  } catch (error) {
      console.error('Error fetching pastorder data:', error);
      return [];
  } 
}
export async function postPastData(data) {
    try {
        await connect();
        const dat= await data;
        // console.log('Past data:', dat);
        const items=data.Items;
        
        const receiver=dat.Email
        const receiverName=dat.Username
        const receiverPhone=dat.Phone
        const tupaemail="satarupawork18@gmail.com"
        await sendadminemail(tupaemail,receiverName,receiverPhone,receiver,items)
        const dat2={
            Email:receiver,
            Items:JSON.stringify(items),
            Phone:receiverPhone,
            Username:receiverName
        }
        const res = await Past.create(dat2);
        // console.log('Past data:', res);
        await sendbuyeremail(receiver,receiverName,items)
        return {data:res, message:"Success!"};
    } catch (error) {
        console.error('Error posting pastorder data:', error);
        return [];
    } 
}
async function sendadminemail(emailed, user, phone, useremail, items) {
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: sender,
          pass: pass,
        },
      });
  
      const mailOptions = {
        from: sender,
        to: emailed,
        subject: "New Order Received!",
        html: `
          <body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
            <div style="max-width: 800px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
              <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h2 style="color: #7c3aed; margin-bottom: 20px;">New Order Details</h2>
                
                <div style="margin-bottom: 20px;">
                  <h3 style="color: #4b5563;">Customer Information</h3>
                  <p><strong>Name:</strong> ${user}</p>
                  <p><strong>Phone:</strong> ${phone}</p>
                  <p><strong>Email:</strong> ${useremail}</p>
                </div>
                
                <div style="margin-bottom: 20px;">
                  <h3 style="color: #4b5563;">Order Items</h3>
                  <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                    <thead>
                      <tr style="background-color: #f3f4f6;">
                        <th style="padding: 12px; text-align: left; border: 1px solid #e5e7eb;">ID</th>
                        <th style="padding: 12px; text-align: left; border: 1px solid #e5e7eb;">Title</th>
                        <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${items.map(item => `
                        <tr>
                          <td style="padding: 12px; border: 1px solid #e5e7eb;">${item.id}</td>
                          <td style="padding: 12px; border: 1px solid #e5e7eb;">${item.title}</td>
                          <td style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;">${item.quantity}</td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
                
                <p style="color: #4b5563; font-size: 14px;">Please process this order and contact the customer soon.</p>
              </div>
            </div>
          </body>
        `
      };
  
      const info = await transporter.sendMail(mailOptions);
      console.log("Admin email sent:", info.response);
      return true;
    } catch(err) {
      console.error("Error sending admin email:", err);
      return false;
    }
  }


async function sendbuyeremail(emailed, user, items) { 
    console.log("EMAIL DATA: "+emailed+" "+user+" "+items);
    try{ 
    
    const transporter = nodemailer.createTransport({ 
      host: 'smtp.gmail.com', 
      port: 465, 
      secure: true, 
      auth: { 
        user: sender, 
        pass: pass, 
      }, 
    }); 
   
      // Email content and configuration (customize this based on your email service) 
      const mailOptions = { 
        from: sender, 
        to: emailed, 
        subject: "Your order has been placed successfully!",
        html: `
        <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background: linear-gradient(to bottom right, #faf5ff, #ffffff); padding: 30px;">
            <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #7c3aed; font-size: 28px; margin: 0;">Order Confirmation</h1>
            <p style="color: #6b7280; font-size: 16px; margin-top: 10px;">Thank you for shopping with us!</p>
            </div>

            <div style="background: white; border-radius: 12px; padding: 25px; box-shadow: 0 4px 6px rgba(124, 58, 237, 0.1); margin-bottom: 25px;">
            <h2 style="color: #7c3aed; font-size: 20px; margin-top: 0;">Hello ${user},</h2>
            <p style="color: #4b5563; line-height: 1.6; font-size: 16px;">
                We're delighted to confirm that your order has been successfully placed. Our artisans take great pride in their work, and we want to ensure you receive the best possible service.
            </p>
            <p style="color: #4b5563; line-height: 1.6; font-size: 16px;">
                One of our admin team members will contact you shortly to discuss your order details and answer any questions you might have.
            </p>
            </div>

            <div style="background: white; border-radius: 12px; padding: 25px; box-shadow: 0 4px 6px rgba(124, 58, 237, 0.1);">
            <h3 style="color: #7c3aed; font-size: 18px; margin-top: 0;">Order Summary</h3>
            <div style="margin-bottom: 20px;">
                  <h3 style="color: #4b5563;">Order Items</h3>
                  <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                    <thead>
                      <tr style="background-color: #f3f4f6;">
                        <th style="padding: 12px; text-align: left; border: 1px solid #e5e7eb;">ID</th>
                        <th style="padding: 12px; text-align: left; border: 1px solid #e5e7eb;">Title</th>
                        <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${items.map(item => `
                        <tr>
                          <td style="padding: 12px; border: 1px solid #e5e7eb;">${item.id}</td>
                          <td style="padding: 12px; border: 1px solid #e5e7eb;">${item.title}</td>
                          <td style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;">${item.quantity}</td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
            </div>

            <div style="text-align: center; margin-top: 30px;">
            <p style="color: #6b7280; font-size: 14px;">
                If you have any questions, please don't hesitate to contact us.
            </p>
            <div style="margin-top: 20px; color: #7c3aed; font-size: 14px;">
                <p>Best regards,</p>
                <p>The Artisan's Corner Team</p>
            </div>
            </div>
        </div>
        </body>`, 
       
           
   
      }; 
     
      // Send the email 
      transporter.sendMail(mailOptions, (error, info) => { 
        if (error) { 
          console.log(error); 
        } else { 
          console.log(`Email sent: ${info.response}`); 
        } 
      }); 
      
       console.log("EMAIL SENT TO! : "+emailed);
      
    } 
    catch(err) 
    { 
      console.log(err) 
    } 
  }