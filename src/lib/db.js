const {USER_NAME, PASSWORD} = process.env;

export const connectionSrt = `mongodb+srv://${USER_NAME}:${PASSWORD}@cluster0.izgqlrb.mongodb.net/productDB?retryWrites=true&w=majority`