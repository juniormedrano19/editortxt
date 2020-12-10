import { db } from "../firebase/firebase-config"


//se necesitará el uid para cargar el documento nuevo
export const loadNote = async (uid) => {


  const docSnap= await db.collection(`${uid}/journal/notes`).orderBy("date","desc").get();//retorna una promesa;
  const documents=[];

 /*  console.log(docSnap); */
  docSnap.forEach(docHijo=>{
      /* console.log(docHijo.data()); */ //body, title, id

      //incluímos el id
      documents.push({
          id:docHijo.id,
          ...docHijo.data(),
      })


  });
 /*  console.log(documents); */
  return documents;
}
