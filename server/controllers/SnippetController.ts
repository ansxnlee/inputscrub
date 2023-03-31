import { Request, Response } from 'express';
import { FilterQuery, QueryOrder, wrap } from '@mikro-orm/core';

import { DI } from '../server';
import { SnippetEntity } from '../entities/SnippetEntity';
import { QUERYLIMIT } from '../utils/constants';

export const getSnippets = async (_req: Request, res: Response) => {
  try {
    const snippet = await DI.snippetRepository.findAll({
      orderBy: {id: QueryOrder.ASC},
      limit: QUERYLIMIT,
    });
    return res.status(200).json(snippet);
  } catch(e: any) {
    return res.status(400).json({ message: e.message });
  }
}

export const getSignSnippets = async (req: Request, res: Response) => {
  try {
    const snippet = await DI.snippetRepository.find({
      sign: req.params.sign
    } as SnippetEntity);
    return res.status(200).json(snippet);
  } catch(e: any) {
    return res.status(400).json({ message: e.message });
  }
}

export const createSnippet = async (req: Request, res: Response) => {
  if(!req.body.text) {
    return res.status(400).json({ message: "missing snippet text"});
  }
  if(!req.body.sign) {
    req.body.sign = 'anon';
  }
  try {
    const snippet = DI.em.create(SnippetEntity, req.body);
    await DI.snippetRepository.persist(snippet).flush();
    return res.status(200).json(snippet);
  } catch(e: any) {
    return res.status(400).json({ message: e.message });
  }
}