import { Request, Response } from "express";
import { prisma } from "../model";
import { BlobServiceClient } from "@azure/storage-blob";

// const AZURE_STORAGE_CONNECTION_STRING = 'DefaultEndpointsProtocol=https;AccountName=linkup;AccountKey=w+Vq50s4J70GYfHMI3qwqS68016IndSS+QTEdmsWadhfkJjsPk7Mzp2jS2xwWsOcmXBFdkykjI0c+AStnHXDpw==;EndpointSuffix=core.windows.net';
// const containerName = 'linkup-container';
// const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
// const containerClient = blobServiceClient.getContainerClient(containerName);

export const addResource = async(req : Request, res : Response) => {
    const resourceObj = req.body;
    const file : any = req.file;
    if(req.file){
      console.log("file is here man!!!!!!!!!!!!!!!!!!!!!!!!", file)
    }
    try{

      // if(resourceObj.type == 'FILE'){
      //   console.log("processing file");
      //   const blobName = file.originalname;
      //   const blockBlobClient = containerClient.getBlockBlobClient(blobName);
      //   const uploadResponse = await blockBlobClient.uploadData(file.buffer, {
      //     blobHTTPHeaders: { blobContentType: file.mimetype }
      //   });
      // }
      const result = await prisma.resource.create({
        data : {
          type : resourceObj.type,
          content : resourceObj.content,
          title : resourceObj.title,
          link : resourceObj.link ? resourceObj.link : null,
          authorId : resourceObj.userId
        }
      })

      console.log(result, " result");
      return res.status(200).json( {message : "success", data : result});
    }
    catch(error){
      throw new Error('Error in Resource Creation');
    }
}

export const listResources = async(req : Request, res : Response) => {
    // get all resources form the table 
    try{
      const result = await prisma.resource.findMany();
      if(result.length > 0){
        res.status(200).json({
          message : 'success',
          data : result
        })
      }
      else{
        res.status(500).json({
          message : 'failed',
          data : null
        })
      }
    }
    catch(error){
      throw new Error('Error in fetching resource lists')
    }
}