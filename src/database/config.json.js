require('dotenv').config();

export const configDb = {
  url: `mongodb+srv://gusta:${process.env.DATABASE_PASSWORD}@cursojs.vtjjl.mongodb.net/QuestionsIO?authSource=admin&replicaSet=atlas-116s12-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`,
};
