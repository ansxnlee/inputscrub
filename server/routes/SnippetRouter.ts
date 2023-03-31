import express from 'express';
import {
  getSnippets,
  getSignSnippets,
  createSnippet,
  // updateSnippet,
  // deleteSnippet
} from '../controllers/SnippetController';

export const SnippetRouter = express.Router();

SnippetRouter.get('/:sign', getSignSnippets);
SnippetRouter.get('/', getSnippets);
SnippetRouter.post('/', createSnippet);
