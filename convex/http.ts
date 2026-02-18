// import { Webhook } from "./../node_modules/svix/src/webhook";
// import { WebhookEvent } from "./../node_modules/@clerk/backend/dist/api/resources/Webhooks.d";
// import { httpRouter } from "convex/server";
// import { httpAction } from "./_generated/server";
// import { error } from "console";

// const http = httpRouter();

// const clerkwebhook = httpAction(async (ctx, request) => {
//   const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
//   if (!webhookSecret) {
//     throw new Error("Missing CLERK_WEBHOOK_SECRET environment variable ");
//   }

//   const svix_id = request.headers.get("svix-id");
//   const svix_signature = request.headers.get("svix-signature");
//   const svix_timestamp = request.headers.get("svix-timestamp");
//   if (!svix_id || !svix_signature || !svix_timestamp) {
//     return new Response("Error occured --- no svix headers", { status: 400 });
//   }

//   const payload = await request.json();
//   const body = JSON.stringify(payload);

//   const wh = new Webhook(webhookSecret);
//   let evt: WebhookEvent;

//   try {
//     evt = wh.verify(body, {
//       "svix-id": svix_id,
//       "svix-signature": svix_signature,
//       "svix-timestamp": svix_timestamp,
//     }) as WebhookEvent;
//   } catch (error) {
//     console.log("error verifying the webhook", error);
//     return new Response("error occured", { status: 400 });
//   }

//   try {
//     // todo : create the user and send it to database
//   } catch (error) {}
// });

// http.route({
//   path: "/clerk-webhook",
//   method: "POST",
//   handler: clerkwebhook,
// });

// export default http;
