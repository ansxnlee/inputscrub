export const __prod__ = process.env.NODE_ENV === 'production';
export const PORT = process.env.port || 4000;
export const CORSORIGIN = 'http://localhost:3000';
export const QUERYLIMIT = 20;
export const InputProps = {
  snippetTextAreaMax: 200
}