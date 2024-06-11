import { Request, Response } from 'express';
import { prisma } from '../model';
import { BlobServiceClient } from '@azure/storage-blob';

export const addResource = async (req: Request, res: Response) => {
  const resourceObj = req.body;
  const file: any = req.file;
  if (req.file) {
    console.log('file is here man!!!!!!!!!!!!!!!!!!!!!!!!', file);
  }
  try {
    const result = await prisma.resource.create({
      data: {
        type: resourceObj.type,
        content: resourceObj.content,
        title: resourceObj.title,
        link: resourceObj.link ? resourceObj.link : null,
        authorId: resourceObj.userId,
        category: resourceObj.category,
      },
    });

    console.log(result, ' result');
    return res.status(200).json({ message: 'success', data: result });
  } catch (error) {
    throw new Error('Error in Resource Creation');
  }
};

export const listResources = async (req: Request, res: Response) => {
  // get all resources form the table
  try {
    const result = await prisma.resource.findMany({
      include: {
        author: {
          select: {
            username: true,
            name: true,
          },
        },
      },
    });
    if (result.length > 0) {
      res.status(200).json({
        message: 'success',
        data: result,
      });
    } else {
      res.status(500).json({
        message: 'failed',
        data: null,
      });
    }
  } catch (error) {
    throw new Error('Error in fetching resource lists');
  }
};
