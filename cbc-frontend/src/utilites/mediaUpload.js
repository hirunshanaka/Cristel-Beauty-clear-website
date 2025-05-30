
import { createClient } from '@supabase/supabase-js'
/** Create a Supabase client using the URL and public API key.
 * The URL and key are used to connect to the Supabase project.*/
 const key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxdHd2eWhna3dxcnR3cXprZnFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2NTIyOTEsImV4cCI6MjA2MDIyODI5MX0.NHPtpJceoSMRttnOMuR4u-jluBtyFeSwokEkqfx-4Hs"
 const url="https://rqtwvyhgkwqrtwqzkfql.supabase.co"
 export default function uploadmediaToSupabase(file) {
    return new Promise((resolve, reject) => {
        if(file == null)
        {
            reject("file not found")
        }
        let fileName=file.name
        const extenstion=fileName.split(".")[fileName.split(".").length-1]

         /*connect the supabase client to the storage*/
        const supabase=createClient(url,key);
        const timestamp=new Date().getTime();
    
          fileName= timestamp+ file.name+"."+extenstion;
          console.log(fileName)

         supabase.storage.from("images").upload(fileName,file,{
          cacheControl:"3600",
          upsert:false
    
    }).then(()=>{
        const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
        resolve(publicUrl)
    }).catch((error)=>{
        console.log(error)
        reject(error)
    })
    })
}
