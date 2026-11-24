require("dotenv").config();
const express=require("express"),OpenAI=require("openai"),path=require("path");
const app=express();app.use(express.json({limit:"1mb"}));app.use(express.static(__dirname));
app.post("/api/chat",async(req,res)=>{
 if(!process.env.OPENAI_API_KEY)return res.status(503).json({error:"Configure OPENAI_API_KEY in .env"});
 try{const client=new OpenAI({apiKey:process.env.OPENAI_API_KEY});const {message,context,mode}=req.body||{};
 const r=await client.chat.completions.create({model:process.env.OPENAI_MODEL||"gpt-4o-mini",temperature:.4,messages:[
 {role:"system",content:`You are a rigorous, encouraging software engineering tutor for a learner targeting AI-native full-stack and agentic AI engineering. ${context||""} Teach mastery-first. Ask one question/task at a time. Give hints before full solutions unless requested. Review code for correctness, readability, edge cases and security. Never claim code was executed if it was not. Mode: ${mode||"teach"}.`},
 {role:"user",content:message}]});
 res.json({reply:r.choices?.[0]?.message?.content||"No reply returned."});
 }catch(e){console.error(e);res.status(500).json({error:"AI request failed; check server configuration."})}
});
app.listen(process.env.PORT||3000,()=>console.log("Open http://localhost:"+(process.env.PORT||3000)));
