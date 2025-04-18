import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

/** Create a Supabase client using the URL and public API key.
 * The URL and key are used to connect to the Supabase project.*/
const key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxdHd2eWhna3dxcnR3cXprZnFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2NTIyOTEsImV4cCI6MjA2MDIyODI5MX0.NHPtpJceoSMRttnOMuR4u-jluBtyFeSwokEkqfx-4Hs"
const url="https://rqtwvyhgkwqrtwqzkfql.supabase.co"

export default function FileUploadTest(){
    /*create a state to store the file*/
    const [file,setFile]=useState(null)
 
  /*create a function to handle the file upload*/
    function handleUpload(){
        if(file==null)
        {
            alert("Please select a file")
            return
        }
        console.log(file)
        
        /*connect the supabase client to the storage*/
        const supabase=createClient(url,key);
        supabase.storage.from("images").upload(file.name,file,{
            cacheControl:"3600",
            upsert:false
        }).then((res)=>{
            console.log(res)
        })
    }
    return(
        <div>
            <h1>File Upload</h1>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    )
    
}