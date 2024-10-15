import express from 'express';
import dotenv from 'dotenv';
import { connectToDatabase } from './db';
import cors from 'cors';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { Resend } from 'resend';
import { Request, Response, NextFunction } from 'express';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

interface CustomRequest extends Request {
  user?: JwtPayload;
}

dotenv.config();

const HOST = process.env.HOST || 'http://localhost';
const PORT = parseInt(process.env.PORT || '4500');
const app = express();

app.use(cors({
  origin: `${process.env.CORS}`,
  credentials: true, 
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const verifyToken = (req: CustomRequest, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    (req as any).user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

app.get('/', verifyToken, (req, res) => {
  try{
    return res.status(200).send();
  }catch(error){
    return res.status(422).send();
  }
});


/*
* Auth
*/
app.post("/auth/login", async (req, res) => {
  try {
    res.status(200).json({ message: "Verification code sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});


/*
 *  Stokvel
 */
app.get('/stokvel', verifyToken,  async (req: CustomRequest, res: Response) => {
  try {
    res.status(200).json({ message: "Verification code sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});


/*
 *  Transactions
 */
app.get('/transactions', verifyToken,  async (req: CustomRequest, res: Response) => {
  try {
    res.status(200).json({ message: "Verification code sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, async () => {
  await connectToDatabase();
  console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
});
 